import { useRouter } from "@/app/router";
import { IMG } from "@/data/images";
import { CONTACT } from "@/data/site";

const LINK =
  "group flex items-center gap-[16px] text-left text-[16px] leading-[1.7] text-[#c3d1d1] transition-colors duration-200 hover:text-yellow";
const LINK_LIST = "mt-[30px] flex flex-col gap-[8px]";
const HEADING = "text-[20px] leading-[normal] text-yellow";

const QUICK_LINKS = [
  { label: "About Us", route: "about" as const, anchor: undefined },
  { label: "Programs", route: "programs" as const, anchor: undefined },
  { label: "Services", route: "home" as const, anchor: "services" },
  { label: "Events", route: "events" as const, anchor: undefined },
];

function Chevron() {
  return (
    <svg
      className="h-[12px] w-[12px] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-[3px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer id="contact" className="bg-dark pt-[52px] text-white">
      <div className="shell grid grid-cols-[1fr_0.32fr_0.4fr] gap-[60px] pb-[54px] max-[800px]:grid-cols-1 max-[800px]:gap-[30px] max-[800px]:pb-[38px]">
        <div className="flex flex-col items-start">
          <img
            className="h-[59px] w-[56px] object-contain"
            src={IMG.logo}
            alt="Blooming Wells Centre"
          />
          <p className="mt-[28px] max-w-[470px] text-[16px] leading-[1.65] text-[#c3d1d1]">
            We create a welcoming space where people from all walks of life can connect, learn, and
            grow together. Through shared experiences, kindness, and support, we provide
            opportunities and a sense of belonging for everyone.
          </p>
          {/* <img className="mt-[52px] w-[98px]" src={IMG.socialLinks} alt="Facebook and LinkedIn" /> */}
        </div>
        <div>
          <h4 className={HEADING}>Quick Links</h4>
          <div className={LINK_LIST}>
            {QUICK_LINKS.map(({ label, route, anchor }) => (
              <button
                className={`${LINK} w-full`}
                key={label}
                onClick={() => navigate(route, anchor)}
              >
                <Chevron />
                {label}
              </button>
            ))}
            <button className={`${LINK} w-full`} onClick={() => navigate("home", "contact")}>
              <Chevron />
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h4 className={HEADING}>Contacts</h4>
          <p className="mt-[30px] text-[16px] leading-[1.65] text-[#c3d1d1]">{CONTACT.address}</p>
          <a className={`${LINK} mt-[30px]`} href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          <a className={`${LINK} mt-[14px]`} href={CONTACT.phoneHref}>
            {CONTACT.phone}
          </a>
        </div>
      </div>
      <div className="shell border-t border-[#3d4d4f] pt-[30px] pb-[44px] text-[15px] text-[#9fb0b0]">
        2023 BWEC is powered by{" "}
        <a
          className="underline decoration-[#9fb0b0] underline-offset-2 transition-colors duration-200 hover:text-yellow"
          href="https://www.linkedin.com/in/olajuwon-olalekan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lexcr8t
        </a>
      </div>
    </footer>
  );
}
