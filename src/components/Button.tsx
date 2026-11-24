import type { ReactNode } from "react";

const BASE =
  "whitespace-nowrap rounded-full px-[34px] py-[16px] font-heading text-[15px] leading-[normal] transition-[translate,scale,box-shadow,background-color,color,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_var(--btn-glow,#172b2d1f)] active:translate-y-0 active:scale-[0.985] active:shadow-none";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  /** When set, renders an anchor that opens in a new tab. */
  href?: string;
  blue?: boolean;
  dark?: boolean;
  outline?: boolean;
  className?: string;
};

type Tone = Pick<ButtonProps, "blue" | "dark" | "outline">;

function toneClass({ blue, dark, outline }: Tone) {
  if (blue) return "bg-blue text-[#b3dfff] [--btn-glow:#00569352]";
  if (dark) return "bg-dark text-white [--btn-glow:#102c2e4d]";
  if (outline) return "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white";
  return "bg-yellow text-ink [--btn-glow:#ffcf2459]";
}

export function Button({
  children,
  onClick,
  href,
  blue = false,
  dark = false,
  outline = false,
  className = "",
}: ButtonProps) {
  const classes = `${BASE} inline-block text-center no-underline ${toneClass({ blue, dark, outline })} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
