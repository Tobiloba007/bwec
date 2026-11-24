import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * True once the element has scrolled into view for the first time. Falls back
 * to `true` where IntersectionObserver is unavailable, so content always shows.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, applied to the entrance transition. */
  delay?: number;
  /** Entry direction; defaults to rising from below. */
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
};

/** Fades and lifts its children in the first time they reach the viewport. */
export function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={inView}
      data-direction={direction}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/** Counts from zero to `value` the first time it scrolls into view. */
export function CountUp({ value, suffix = "", className = "" }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frame = requestAnimationFrame(function step(now) {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(step);
    });

    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
