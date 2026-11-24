import { useEffect, useState } from "react";

/** Appears once the reader is deep in a page; returns them to the top. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`group fixed right-5 bottom-5 z-40 grid h-[48px] w-[48px] place-items-center rounded-full bg-dark text-yellow shadow-[0_10px_26px_#172b2d3d] transition-[opacity,transform,background-color] duration-300 ease-out hover:bg-[#1c3c3f] max-[800px]:right-4 max-[800px]:bottom-4 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        className="h-[18px] w-[18px] transition-transform duration-300 ease-out group-hover:-translate-y-[2px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
