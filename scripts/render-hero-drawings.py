"""SO-101・AmazingHand・zarm V1 の設計データを、ホームページ背景用の線画 PNG(透明背景)にする。
使い方: ~/zenlab/zarm/.venv/bin/python render_bg.py <出力先ディレクトリ>
"""
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

import numpy as np
import pyvista as pv
import trimesh
from trimesh.transformations import euler_matrix, rotation_matrix, translation_matrix

HOME = Path.home() / "zenlab"
OUT = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
OUT.mkdir(parents=True, exist_ok=True)

import os
LINE = os.environ.get("LINE", "#334155")  # 既定は slate-700(背景で薄く使う前提)。事業内容の図は #0f172a
LW = float(os.environ.get("LW", "1"))  # 線の太さの倍率
FACE = "#ffffff"


def draw(meshes, out, cam, size=(2000, 2000), parallel=False, angle=28):
    pl = pv.Plotter(off_screen=True, window_size=size, lighting="none")
    for m in meshes:
        pm = pv.wrap(m)
        pl.add_mesh(pm, color=FACE, ambient=1.0, diffuse=0.0, specular=0.0)
        edges = pm.extract_feature_edges(feature_angle=angle, boundary_edges=True, non_manifold_edges=False, manifold_edges=False)
        if edges.n_points:
            pl.add_mesh(edges, color=LINE, line_width=1.6 * LW, render_lines_as_tubes=False)
        pl.add_silhouette(pm, color=LINE, line_width=2.2 * LW)
    pl.camera_position = cam
    if parallel:
        pl.enable_parallel_projection()
    pl.enable_anti_aliasing("ssaa")
    pl.screenshot(str(out), transparent_background=True)
    pl.close()
    from PIL import Image
    im = Image.open(out)
    im.crop(im.getbbox()).save(out)
    print("wrote", out, im.getbbox())


# ---------- SO-101(URDF を読んで組む) ----------
def so101(q=None):
    root = HOME / "zarm-v2/third_party/so101"
    tree = ET.parse(root / "so101_new_calib.urdf").getroot()

    def tf(el):
        o = el.find("origin")
        xyz = [float(v) for v in (o.get("xyz", "0 0 0").split() if o is not None else [0, 0, 0])]
        rpy = [float(v) for v in (o.get("rpy", "0 0 0").split() if o is not None else [0, 0, 0])]
        return translation_matrix(xyz) @ euler_matrix(*rpy, "sxyz")

    links = {l.get("name"): l for l in tree.findall("link")}
    joints = tree.findall("joint")
    frame = {"base_link": np.eye(4)}
    q = q or {}
    pending = list(joints)
    while pending:
        for j in list(pending):
            p, c = j.find("parent").get("link"), j.find("child").get("link")
            if p in frame:
                T = frame[p] @ tf(j)
                if j.get("type") in ("revolute", "continuous") and j.get("name") in q:
                    ax = [float(v) for v in j.find("axis").get("xyz").split()]
                    T = T @ rotation_matrix(q[j.get("name")], ax)
                frame[c] = T
                pending.remove(j)
    out = []
    for name, l in links.items():
        for v in l.findall("visual"):
            f = v.find("geometry/mesh").get("filename")
            m = trimesh.load(root / f)
            m.apply_transform(frame[name] @ tf(v))
            m.apply_scale(1000)  # m → mm
            out.append(m)
    return out


# ---------- zarm V1(リポジトリの組み立てをそのまま使う) ----------
def zarm(pose="look"):
    sys.path.insert(0, str(HOME / "zarm/cad"))
    import zarm_v1 as z

    fr = z.chain(z.POSES[pose])
    out = []
    for n, f in z.PARTS_FRAME.items():
        m = trimesh.load(z.OUT / f"{n}.stl")
        m.apply_transform(fr[f])
        out.append(m)
    return out


# ---------- AmazingHand(部品を並べた部品図) ----------
def amazinghand():
    d = HOME / "zarm-v2/local/amazinghand/cad/stl"
    names = [
        "Amazing Hand Parts - R-Palm_Shell", "Amazing Hand Parts - Proximal", "Amazing Hand Parts - Distal",
        "Amazing Hand Parts - Proximal_Shell", "Amazing Hand Parts - Distal_Shell", "Amazing Hand Parts - R-Hand_Plate",
        "Amazing Hand Parts - Gimbal", "Amazing Hand Parts - Link", "Amazing Hand Parts - Finger_Frame-1",
    ]
    out, x, y, row_h, col = [], 0.0, 0.0, 0.0, 0
    for n in names:
        m = trimesh.load(d / f"{n}.stl")
        m.apply_translation(-m.bounds[0])
        ext = m.extents
        if col == 3:
            x, y, col, row_h = 0.0, y - row_h - 20, 0, 0.0
        m.apply_translation([x, y - ext[1], 0])
        x += ext[0] + 20
        row_h = max(row_h, ext[1])
        col += 1
        out.append(m)
    return out


def bbox_cam(meshes, direction, up=(0, 0, 1), dist=3.0):
    lo = np.min([m.bounds[0] for m in meshes], axis=0)
    hi = np.max([m.bounds[1] for m in meshes], axis=0)
    c = (lo + hi) / 2
    r = np.linalg.norm(hi - lo)
    d = np.array(direction, float)
    d /= np.linalg.norm(d)
    return [tuple(c + d * r * dist), tuple(c), up]


if __name__ == "__main__":
    which = sys.argv[2:] or ["so101", "zarm", "hand"]
    if "so101" in which:
        import json, os
        q = json.loads(os.environ.get("SO101_Q", "{}"))
        ms = so101(q)
        draw(ms, OUT / "so101.png", bbox_cam(ms, tuple(json.loads(os.environ.get("SO101_DIR", "[1.0,-1.4,0.7]")))))
    if "zarm" in which:
        ms = zarm("look")
        draw(ms, OUT / "zarm.png", bbox_cam(ms, (0.9, -1.6, 0.8)))
    if "hand" in which:
        ms = amazinghand()
        draw(ms, OUT / "amazinghand.png", bbox_cam(ms, (0.25, -0.35, 1.0), up=(0, 1, 0)), parallel=True, angle=35)
