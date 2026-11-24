import { useRouter } from "@/app/router";
import type { Route } from "@/app/router";
import { Button } from "@/components/Button";
import { CtaSection } from "@/components/CtaSection";
import { CountUp, Reveal } from "@/components/Reveal";
import { IMG } from "@/data/images";
import { PROGRAM_CARDS } from "@/data/programs";
import { FORMS } from "@/data/site";

const EYEBROW = "font-support text-[12px] leading-[normal] tracking-[0.03em]";
const HERO =
  "shell grid grid-cols-[0.95fr_1.15fr] items-center gap-[45px] pt-[52px] pb-[70px] max-[1100px]:gap-[32px] max-[900px]:grid-cols-1 max-[800px]:gap-[35px] max-[800px]:py-[45px]";
const HERO_INTRO = "my-[28px] max-w-[540px] text-[18px] max-[800px]:my-[22px]";
const HERO_ACTIONS = "flex flex-wrap items-center gap-3";
const HERO_IMG =
  "ken-burns h-[560px] w-full rounded-[20px] object-cover max-[1100px]:h-[480px] max-[800px]:h-[340px]";
const CARD_GRID = "grid grid-cols-3 gap-[24px] max-[800px]:grid-cols-1";
const ACTION_CARD =
  "flex h-full flex-col rounded-[16px] p-[30px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_#172b2d1a] max-[800px]:p-[26px]";
const IMAGE_CARD =
  "group flex h-full flex-col overflow-hidden rounded-[16px] border border-[#e6e6e6] bg-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_40px_#172b2d1a]";
const IMAGE_CARD_IMG =
  "h-[246px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]";
const IMAGE_CARD_BODY = "flex flex-1 flex-col p-[24px]";
const IMAGE_CARD_P = "mt-3 text-[15px]";
const READ_MORE =
  "mt-auto self-start pt-[18px] font-support text-[15px] leading-[normal] transition-colors duration-200 hover:text-blue group-hover:text-blue";

const QUICK_ACTIONS: {
  title: string;
  copy: string;
  cta: string;
  target?: Route;
  href?: string;
  card: string;
}[] = [
  {
    title: "Donate",
    copy: "Help fund learning, inclusion, and equal opportunity.",
    cta: "DONATE NOW",
    target: "about",
    card: "bg-yellow",
  },
  {
    title: "Volunteer",
    copy: "Share your skills. Connect cultures. Make a difference.",
    cta: "JOIN US",
    href: FORMS.joinUs,
    card: "bg-[#e0e3e4]",
  },
  {
    title: "Speak up",
    copy: "Together, we can build a more welcoming, understanding, and inclusive community for everyone.",
    cta: "GET INVOLVED",
    href: FORMS.getInvolved,
    card: "bg-[#b3dfff]",
  },
];

const PROGRAM_PREVIEWS = PROGRAM_CARDS.slice(0, 3);

const IMPACT_STATS = [
  { value: 356, label: "Featured Campaign" },
  { value: 172, label: "Dedicated Volunteers" },
  { value: 7623, label: "Happy People" },
];

const UPCOMING_EVENTS = [
  {
    title: "Distribution of free Grocery",
    day: "02",
    month: "Dec",
    time: "10:00 am - Every Wednesdays & Saturdays",
    copy: "We give groceries, gift cards, food to the homeless, and less-privileged.",
  },
  {
    title: "Seniors Program",
    day: "13",
    month: "Jan",
    time: "09:00 am - 11:00",
    copy: "Programs are designed to empower and engage seniors so they can be productive members of their communities.",
  },
  {
    title: "Mentorship Program",
    day: "12",
    month: "Mar",
    time: "09:00 am - 11:00 am",
    copy: "Giving the best guidance and clarity based career choice.",
  },
  {
    title: "Immigrant Support",
    day: "22",
    month: "Apr",
    time: "09:00 am - 11:00 am",
    copy: "Giving the need help to the new immigrant in the communities.",
  },
];

const EVENT_ROW =
  "group flex h-full min-h-[170px] w-full items-start gap-[26px] rounded-[16px] bg-white p-[22px] text-left transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_#172b2d14] max-[560px]:min-h-0 max-[560px]:gap-[16px] max-[560px]:p-[18px]";

export function HomePage() {
  const { navigate } = useRouter();

  return (
    <>
      <section className={HERO}>
        <Reveal>
          <p className={`${EYEBROW} flex items-center gap-[10px]`}>
            <img
              className="h-[18px] w-[18px] shrink-0"
              src={IMG.mapleLeaf}
              alt=""
            />
            BLOOMING WELLS CENTRE · MANY CULTURES, ONE COMMUNITY
          </p>
          <h1 className="mt-[20px] max-[560px]:text-[38px]">
            Many cultures.
            <br />
            Equal dignity.
            <br />
            Stronger together.
          </h1>
          <p className={HERO_INTRO}>
            We create welcoming spaces where people from different backgrounds
            can come together, learn, and build meaningful connections. Through
            education, open conversations, and compassionate support, we
            encourage opportunities, nurture understanding, and help create a
            more inclusive community where everyone feels valued, supported, and
            at home.
          </p>
          <div className={HERO_ACTIONS}>
            <Button href={FORMS.getInvolved}>GET INVOLVED</Button>
            <Button outline href={FORMS.joinUs}>
              JOIN US
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120} direction="scale">
          <img
            className={HERO_IMG}
            src={IMG.diverseCommunity}
            alt="A diverse community smiling together"
          />
        </Reveal>
      </section>

      <section
        id="services"
        className="shell grid grid-cols-3 gap-[24px] pb-20 max-[800px]:grid-cols-1 max-[800px]:gap-[18px] max-[800px]:pb-[55px]"
      >
        {QUICK_ACTIONS.map((action, index) => (
          <Reveal key={action.title} delay={index * 90} className="h-full">
            <article className={`${ACTION_CARD} ${action.card}`}>
              <h3 className="text-[26px]">{action.title}</h3>
              <p className="mt-3 mb-[28px] text-[15px]">{action.copy}</p>
              <Button
                dark
                className="mt-auto self-start"
                href={action.href}
                onClick={action.href ? undefined : () => navigate(action.target!)}
              >
                {action.cta}
              </Button>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="shell grid grid-cols-[1fr_1.15fr] items-center gap-20 py-[70px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[36px] max-[800px]:py-[50px]">
        <Reveal direction="left">
          <img
            className="h-[500px] w-full rounded-[20px] object-cover max-[1000px]:h-[400px] max-[800px]:h-[320px]"
            src={IMG.communityWorkingTogether}
            alt="Community members working together"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className={EYEBROW}>OUR PURPOSE</p>
          <h2 className="my-[18px]">Belonging starts with understanding.</h2>
          <p className="my-[18px] text-[15px]">
            We build awareness, empathy, and understanding across cultures.
            Through education and open dialogue, we address racism,
            discrimination, and unconscious bias.
          </p>
          <p className="my-[18px] text-[15px]">
            We help people prepare for employment, strengthen community
            connections, and take part in social life. We also create pathways
            to leadership, advocacy, and civic engagement — so every voice can
            help shape our shared future.
          </p>
          <Button className="mt-2" onClick={() => navigate("about")}>
            READ MORE
          </Button>
        </Reveal>
      </section>

      <section className="shell py-20 max-[800px]:py-[55px]">
        <Reveal>
          <p className={EYEBROW}>LEARN · CONNECT · PARTICIPATE</p>
          <h2 className="mt-3 mb-9">
            Different backgrounds. Shared possibilities.
          </h2>
        </Reveal>
        <div className={CARD_GRID}>
          {PROGRAM_PREVIEWS.map(({ title, image, copy }, index) => (
            <Reveal key={title} delay={index * 90} className="h-full">
              <article className={IMAGE_CARD}>
                <div className="relative overflow-hidden">
                  <img className={IMAGE_CARD_IMG} src={image} alt="" />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172b2d40] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className={IMAGE_CARD_BODY}>
                  <h3 className="text-[22px]">{title}</h3>
                  <p className={IMAGE_CARD_P}>{copy}</p>
                  <button
                    className={READ_MORE}
                    onClick={() => navigate("programs")}
                  >
                    Read more
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-dark py-[68px] text-white max-[800px]:py-[50px]">
        <div className="shell">
          <Reveal>
            <p className={`${EYEBROW} text-yellow`}>OUR COMMUNITY IN ACTION</p>
            <h2 className="mt-3 mb-10">
              Every connection brings
              <br />
              us closer to belonging.
            </h2>
          </Reveal>
          <div className="grid grid-cols-4 items-stretch gap-[26px] max-[1000px]:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:gap-[25px]">
            {IMPACT_STATS.map(({ value, label }, index) => (
              <Reveal key={label} delay={index * 90} className="h-full">
                <div className="h-full border-t border-white/25 pt-[18px]">
                  <b className="block text-[56px] leading-[1.05] text-yellow max-[800px]:text-[44px]">
                    <CountUp value={value} suffix="+" />
                  </b>
                  <span className="mt-1 block text-[16px] text-white">
                    {label}
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={270} className="h-full">
              <button
                className="group flex h-full min-h-[170px] w-full flex-col justify-between gap-[26px] rounded-[16px] bg-[#2e4a4d] p-[22px] text-left transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[#37575a]"
                onClick={() => navigate("about")}
              >
                <img
                  className="h-[43px] w-[43px] transition-transform duration-500 group-hover:rotate-90"
                  src={IMG.plusCircle}
                  alt=""
                />
                <span className="block font-support text-[20px] leading-[normal]">
                  Become a Volunteer
                </span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell grid grid-cols-2 gap-[37px] pt-[140px] pb-[150px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[40px] max-[800px]:pt-[70px] max-[800px]:pb-[70px]">
        <div className="flex flex-col">
          <Reveal>
            <p className={EYEBROW}>CONNECT WITH YOUR COMMUNITY</p>
            <h2 className="mt-3 mb-[55px]">Come together. Grow together.</h2>
          </Reveal>
          <div className="grid flex-1 auto-rows-fr gap-[22px]">
            {UPCOMING_EVENTS.map(({ title, day, month, time, copy }, index) => (
              <Reveal key={title} delay={index * 80} className="h-full">
                <button
                  className={EVENT_ROW}
                  onClick={() => navigate("events")}
                >
                  <span className="w-[82px] shrink-0 rounded-[10px] bg-pale py-[8px] text-center font-heading text-[26px] leading-[1.1] text-blue transition-colors duration-300 group-hover:bg-yellow max-[560px]:w-[64px] max-[560px]:text-[22px]">
                    {day}
                    <small className="mt-[2px] block font-body text-[13px] leading-[normal] font-normal">
                      {month}
                    </small>
                  </span>
                  <span className="block pt-[2px]">
                    <span className="block text-[14px]">{time}</span>
                    <span className="mt-[6px] block font-heading text-[24px] leading-[1.25] max-[560px]:text-[20px]">
                      {title}
                    </span>
                    <span className="mt-[8px] block text-[15px]">{copy}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={120} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-[16px] bg-white">
            <div className="relative overflow-hidden">
              <img
                className="h-[371px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] max-[800px]:h-[260px]"
                src={IMG.freeGroceries}
                alt="Free Groceries"
              />
              <span className="absolute right-[28px] bottom-[12px] rounded-full bg-yellow px-[24px] py-[10px] font-support text-[14px] leading-[normal]">
                Every Wednesdays & Saturdays
              </span>
            </div>
            <div className="flex flex-1 flex-col p-[30px] max-[560px]:p-[24px]">
              <p className="text-[14px]">10:00 am - Every Wednesday </p>
              <h3 className="mt-[10px] text-[38px] max-[800px]:text-[30px]">
                Distribution of Free Grocery
              </h3>
              <p className="mt-[20px] text-[17px]">
                We give free groceries, gift cards, food to the homeless, and
                less-privileged.
              </p>
              <Button
                dark
                className="mt-auto self-start px-[78px] py-[19px] text-[16px]"
                href={FORMS.joinUs}
              >
                JOIN US
              </Button>
            </div>
          </article>
        </Reveal>
      </section>

      <CtaSection />

      <section className="shell grid grid-cols-[0.35fr_0.65fr] gap-[45px] pt-[60px] pb-[196px] max-[900px]:grid-cols-1 max-[900px]:gap-[35px] max-[800px]:pt-[45px] max-[800px]:pb-[70px]">
        <Reveal>
          <p className={EYEBROW}>VOICES FROM OUR COMMUNITY</p>
          <h2 className="mt-3">
            We belong
            <br />
            together.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-support text-[28px] leading-[1.42] text-ink max-[800px]:text-[22px]">
            We appreciate BWEC’s dedication to the area and beyond. May the
            Father give you strength and favor, along with all the volunteers.
          </p>
          <div className="mt-[80px] flex items-center gap-[18px] max-[800px]:mt-[40px]">
            <img
              className="h-[62px] w-[62px] rounded-full object-cover object-[50%_30%]"
              src={IMG.diverseCommunity}
              alt=""
            />
            <div>
              <b className="block text-[19px] leading-[normal]">Larry Toms</b>
              <small className="mt-[6px] block text-[15px] leading-[normal] text-muted">
                Childcare Aide
              </small>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
