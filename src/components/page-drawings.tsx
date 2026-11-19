/* ページ全体の背景に固定する方眼・グラデーション・線画。線画はSO-101・zarm V1・AmazingHand の設計データ(STL)から描いた画像。
   スクロールしても画面の同じ位置に留まる。中央は文字のためにぼかして消している。
   作り直しは scripts/render-hero-drawings.py(zarm の .venv で実行)。 */
const DRAWINGS = [
  {
    src: "/hero/so101.webp",
    className:
      "left-[-18%] sm:left-[1%] bottom-[4%] w-[62vw] sm:w-[30vw] max-w-[440px]",
    opacity: 0.4,
  },
  {
    src: "/hero/zarm.webp",
    className:
      "right-[-8%] sm:right-[5%] top-[13%] w-[30vw] sm:w-[14vw] max-w-[220px]",
    opacity: 0.5,
  },
  {
    src: "/hero/amazinghand.webp",
    className: "hidden md:block right-[17%] bottom-[5%] w-[9vw] max-w-[140px]",
    opacity: 0.4,
  },
];

const MASK =
  "radial-gradient(ellipse 34% 30% at 50% 45%, transparent 55%, #000 100%)";

export function PageDrawings() {
  return (
    <>
      {/* トップにあった方眼と淡いグラデーションも、画面に固定する */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 grid-bg-fine grid-mask-radial opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 hero-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ maskImage: MASK, WebkitMaskImage: MASK }}
      >
        {DRAWINGS.map((d) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={d.src}
            src={d.src}
            alt=""
            draggable={false}
            style={{ opacity: d.opacity }}
            className={`absolute select-none ${d.className}`}
          />
        ))}
      </div>
    </>
  );
}
