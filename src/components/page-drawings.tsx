/* ページ全体の背景に固定する方眼・グラデーション・線画。線画はSO-101・zarm V1・AmazingHand の設計データ(STL)から描いた画像。
   スクロールしても画面の同じ位置に留まる。中央は文字のためにぼかして消している。
   作り直しは scripts/render-hero-drawings.py(zarm の .venv で実行)。 */
const DRAWINGS = [
  {
    src: "/hero/zarm.webp",
    className: "right-[-6%] sm:right-[2%] top-[14%] w-[30vw] sm:w-[12vw] max-w-[200px]",
    opacity: 0.5,
  },
  {
    src: "/hero/so101.webp",
    className: "right-[-20%] sm:right-[-2%] bottom-[3%] w-[60vw] sm:w-[24vw] max-w-[380px]",
    opacity: 0.4,
  },
  {
    src: "/hero/amazinghand.webp",
    className: "hidden md:block left-[2%] bottom-[8%] w-[7vw] max-w-[110px]",
    opacity: 0.35,
  },
];

/* 線画は左右の余白にだけ見せ、本文の列(中央)の後ろでは消す。 */
const MASK =
  "linear-gradient(to right, #000 0%, #000 9%, transparent 17%, transparent 83%, #000 91%, #000 100%)";

export function PageDrawings() {
  return (
    <>
      {/* 方眼は画面全体に一様に敷く(設計用紙のように) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 grid-bg-fine opacity-30"
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
