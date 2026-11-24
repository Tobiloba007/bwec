import { useEffect, useRef, useState } from "react";
import { useRouter } from "@/app/router";
import type { Route } from "@/app/router";
import { IMG } from "@/data/images";
import { CONTACT, NAV_ITEMS } from "@/data/site";
import { Button } from "./Button";

const NAV_LINK =
  "relative font-heading text-[15px] leading-[normal] transition-colors duration-200 hover:text-blue after:absolute after:inset-x-0 after:-bottom-[7px] after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100";
const MENU_ITEM =
  "group flex w-full items-center justify-between gap-4 border-b border-[#e4eded] py-[18px] text-left leading-[normal] transition-colors duration-200 hover:text-blue max-[420px]:py-[15px]";
const MENU_INDEX =
  "font-support text-[12px] tracking-[0.03em] text-muted transition-colors duration-200 group-hover:text-blue";
const MENU_LABEL =
  "font-heading text-[28px] leading-[normal] max-[420px]:text-[24px]";
const ICON_BUTTON =
  "grid h-[48px] w-[48px] shrink-0 place-items-center rounded-[12px] border border-[#c9dcdb] text-ink transition-colors duration-200 hover:border-ink hover:bg-pale";
const BAR =
  "block h-[2px] w-[22px] rounded-full bg-current transition-[transform,opacity] duration-300 ease-out";

/** Three bars that fold into an X. */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <span
      className="flex h-[16px] w-[22px] flex-col justify-between"
      aria-hidden
    >
      <span
        className={`${BAR} ${open ? "translate-y-[7px] rotate-45" : ""}`}
      />
      <span className={`${BAR} ${open ? "opacity-0" : ""}`} />
      <span
        className={`${BAR} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
      />
    </span>
  );
}

export function Header() {
  const { route, navigate } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const { scrollY } = window;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 6);
      setProgress(scrollable > 0 ? Math.min(1, scrollY / scrollable) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1001px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (open) firstItemRef.current?.focus();
    else if (wasOpen.current) toggleRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  const go = (to: Route, anchor?: string) => {
    setOpen(false);
    navigate(to, anchor);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[70] bg-cream/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_#172b2d14]" : ""
        }`}
      >
        <div
          className={`shell relative flex items-center justify-between border-b border-[#d5e6e5] transition-[height] duration-300 ease-out max-[800px]:h-[86px] ${
          scrolled ? "h-[88px]" : "h-[120px]"
        }`}
      >
        <button
          className={`transition-[height,width,opacity] duration-300 ease-out hover:opacity-80 max-[800px]:h-[70px] max-[800px]:w-[72px] ${
            scrolled ? "h-[66px] w-[70px]" : "h-[96px] w-[100px]"
          }`}
          onClick={() => go("home")}
          aria-label="Blooming Wells Centre home"
        >
          <img
            className="h-full w-full object-contain"
            src={IMG.logo}
            alt="Blooming Wells Centre"
          />
        </button>

        <nav className="flex items-center gap-8 max-[1100px]:gap-6 max-[1000px]:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.route}
              className={`${NAV_LINK} ${
                route === item.route ? "text-blue after:scale-x-100" : ""
              }`}
              aria-current={route === item.route ? "page" : undefined}
              onClick={() => go(item.route)}
            >
              {item.label}
            </button>
          ))}
          <Button blue onClick={() => go(route, "contact")}>
            CONTACT US
          </Button>
        </nav>

        <button
          ref={toggleRef}
          className={`${ICON_BUTTON} hidden max-[1000px]:grid`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>

        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-px h-[2px] origin-left bg-yellow"
          style={{ transform: `scaleX(${progress})` }}
        />
        </div>
      </header>

      <div
        id="mobile-nav"
        inert={!open}
        className={`fixed inset-0 z-[60] hidden flex-col bg-cream transition-[opacity,transform] duration-300 ease-out max-[1000px]:flex ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav
          className="shell flex flex-1 flex-col justify-center overflow-y-auto pt-[116px] pb-[36px] max-[800px]:pt-[100px]"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item, index) => {
            const active = route === item.route;
            return (
              <button
                key={item.route}
                ref={index === 0 ? firstItemRef : undefined}
                className={`${MENU_ITEM} transition-[opacity,transform] duration-500 ease-out ${
                  active ? "text-blue" : ""
                } ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${120 + index * 60}ms` : "0ms",
                }}
                aria-current={active ? "page" : undefined}
                onClick={() => go(item.route)}
              >
                <span className="flex items-baseline gap-[14px]">
                  <span className={MENU_INDEX}>0{index + 1}</span>
                  <span className={MENU_LABEL}>{item.label}</span>
                </span>
                <svg
                  className={`h-[18px] w-[18px] shrink-0 transition-[transform,color] duration-300 group-hover:translate-x-1 ${
                    active ? "text-blue" : "text-muted group-hover:text-blue"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            );
          })}

          <div
            className={`mt-[26px] transition-[opacity,transform] duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? "380ms" : "0ms" }}
          >
            <Button
              blue
              className="w-full"
              onClick={() => go(route, "contact")}
            >
              CONTACT US
            </Button>

            <div className="mt-[24px] flex flex-col gap-[8px] border-t border-[#e4eded] pt-[20px]">
              <p className="font-support text-[12px] tracking-[0.03em] text-muted">
                GET IN TOUCH
              </p>
              <a
                className="text-[15px] text-ink transition-colors duration-200 hover:text-blue"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
              <a
                className="text-[15px] text-ink transition-colors duration-200 hover:text-blue"
                href={CONTACT.phoneHref}
              >
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
