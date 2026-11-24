import { useState } from "react";
import { useRouter } from "@/app/router";
import type { Route } from "@/app/router";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/data/images";
import { CONTACT } from "@/data/site";

const EYEBROW = "font-support text-[12px] leading-[normal] tracking-[0.03em]";
const HERO =
  "shell grid grid-cols-[1.05fr_1fr] items-start gap-[100px] pt-[56px] pb-[90px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[40px] max-[800px]:gap-[35px] max-[800px]:py-[42px]";
const HERO_INTRO =
  "mt-[30px] max-w-[560px] text-[18px] max-[800px]:mt-[22px] max-[800px]:text-[16px]";
const HERO_IMG =
  "ken-burns h-[485px] w-full rounded-[20px] object-cover max-[1000px]:h-[440px] max-[800px]:h-[320px]";
const HERO_BADGE =
  "absolute inset-x-[28px] bottom-[10px] rounded-[10px] bg-yellow px-[26px] py-[20px] font-heading text-[20px] leading-[normal] text-ink max-[800px]:inset-x-[16px] max-[800px]:bottom-[16px] max-[800px]:px-[18px] max-[800px]:py-[14px] max-[800px]:text-[16px]";
const FEATURE =
  "shell grid grid-cols-2 items-center gap-[40px] rounded-[22px] bg-pale p-[26px] max-[800px]:grid-cols-1 max-[800px]:gap-[28px] max-[800px]:p-[18px]";
const FEATURE_IMG =
  "h-[510px] w-full rounded-[16px] object-cover max-[1000px]:h-[420px] max-[800px]:h-[320px]";
const CARD_GRID =
  "grid grid-cols-3 gap-x-[40px] gap-y-[50px] max-[1100px]:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:gap-y-[30px]";
const ACTIVITY_CARD =
  "group flex h-full min-h-[560px] flex-col overflow-hidden rounded-[16px] bg-cream transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_#172b2d1a] max-[800px]:min-h-0";
const ACTIVITY_IMG =
  "h-[280px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] max-[800px]:h-[230px]";
const ACTIVITY_BODY = "flex flex-1 flex-col p-[25px] max-[800px]:p-[22px]";
const FILTER =
  "rounded-full border px-[28px] py-[19px] font-support text-[15px] leading-[normal] transition-colors duration-200 max-[800px]:px-[20px] max-[800px]:py-[14px] max-[800px]:text-[14px]";

const FILTERS = ["All activities", "Wellbeing", "Seniors", "Learning & connection"];

const ACTIVITIES: {
  title: string;
  image: string;
  label: string;
  category: string;
  copy: string;
  target: Route;
}[] = [
  {
    title: "Distribution of free Grocery",
    image: IMG.freeGroceries,
    label: "COMMUNITY SUPPORT & WELLBEING",
    category: "Wellbeing",
    copy: "We give free groceries, gift cards, food to the homeless, and less-privileged.",
    target: "home",
  },
  {
    title: "Seniors Program",
    image: IMG.seniorsProgram,
    label: "CONNECTION & BELONGING",
    category: "Seniors",
    copy: "Activities designed to empower and engage seniors as active members of their communities.",
    target: "home",
  },
  {
    title: "Mentorship Program",
    image: IMG.employmentSupportFairActivity,
    label: "LEARNING & OPPORTUNITY",
    category: "Learning & connection",
    copy: "Guidance on career development, education pathways, personal growth, and employment opportunities.",
    target: "mentorship",
  },
];

const PLANNING_STEPS = [
  {
    title: "Confirm the details",
    copy: "Ask our team about the next session, venue, and how to take part.",
  },
  {
    title: "Tell us what you need",
    copy: "Ask about transport assistance, childcare, language support, and accommodations.",
  },
  {
    title: "Come as you are",
    copy: "Bring your experiences, your questions, and a willingness to connect with others.",
  },
];

export function EventsPage() {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState(FILTERS[0]);

  const visible =
    filter === FILTERS[0]
      ? ACTIVITIES
      : ACTIVITIES.filter((activity) => activity.category === filter);

  return (
    <>
      <section className={HERO}>
        <Reveal>
          <p className={EYEBROW}>BLOOMING WELLS CENTRE · COMMUNITY EVENTS</p>
          <h1 className="mt-[22px] max-[560px]:text-[38px]">
            Come together.
            <br />
            Grow together.
          </h1>
          <p className={HERO_INTRO}>
            Make connections, share experiences, and find your place in our community. Explore
            gatherings that support wellbeing, learning, and belonging.
          </p>
          <Button
            className="mt-[100px] max-[800px]:mt-[34px]"
            onClick={() =>
              document.querySelector("#event-list")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            EXPLORE EVENTS
          </Button>
        </Reveal>
        <Reveal delay={120} direction="scale">
          <div className="relative">
            <img
              className={HERO_IMG}
              src={IMG.diverseCommunity}
              alt="Many cultures, one community"
            />
            <span className={HERO_BADGE}>Many cultures. One community.</span>
          </div>
        </Reveal>
      </section>

      <section className="shell">
        <Reveal className={FEATURE}>
          <img
            className={FEATURE_IMG}
            src={IMG.crossCulturalDialogueCirclesActivity}
            alt="Community members in conversation"
          />
          <div className="max-[800px]:pt-[4px]">
            <p className={EYEBROW}>IN FOCUS · CULTURE &amp; CONNECTION</p>
            <h2 className="mt-[16px]">
              Cross-Cultural
              <br />
              Dialogue Circles
            </h2>
            <h3 className="mt-[26px] text-[28px] leading-[1.25] max-[800px]:text-[22px]">
              Different experiences.
              <br />
              Shared understanding.
            </h3>
            <p className="mt-[24px] max-w-[470px] text-[16px]">
              Facilitated discussions that encourage participants to share experiences, learn from
              different perspectives, and build mutual respect.
            </p>
            <Button className="mt-[36px]" onClick={() => navigate("home", "contact")}>
              ASK ABOUT DATES
            </Button>
          </div>
        </Reveal>
      </section>

      <section id="event-list" className="bg-white pt-[85px] pb-[90px] max-[800px]:py-[50px]">
        <div className="shell">
          <Reveal>
            <p className={EYEBROW}>FIND YOUR NEXT CONNECTION</p>
            <h2 className="mt-[16px]">Explore community activities</h2>
            <p className="mt-[18px] text-[16px]">
              Contact our team for current dates, times, locations, and participation details.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div
              className="mt-[34px] flex flex-wrap gap-[12px] max-[800px]:flex-nowrap max-[800px]:overflow-x-auto max-[800px]:pb-[4px]"
              role="group"
              aria-label="Filter activities"
            >
              {FILTERS.map((option) => {
                const active = filter === option;
                return (
                  <button
                    key={option}
                    className={`${FILTER} ${
                      active
                        ? "border-dark bg-dark text-white"
                        : "border-[#dfe4e3] bg-white text-ink hover:border-ink"
                    }`}
                    aria-pressed={active}
                    onClick={() => setFilter(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </Reveal>
          <div key={filter} className={`${CARD_GRID} page-enter mt-[50px]`}>
            {visible.map(({ title, image, label, copy, target }, index) => (
              <Reveal key={title} delay={index * 80} className="h-full">
                <article className={ACTIVITY_CARD}>
                  <div className="overflow-hidden">
                    <img className={ACTIVITY_IMG} src={image} alt="" />
                  </div>
                  <div className={ACTIVITY_BODY}>
                    <p className={`${EYEBROW} text-blue`}>{label}</p>
                    <h3 className="mt-[14px] text-[26px] leading-[1.2] max-[800px]:text-[23px]">
                      {title}
                    </h3>
                    <p className="mt-[16px] mb-[30px] text-[15px] leading-[1.75]">{copy}</p>
                    <Button
                      className="mt-auto self-start"
                      onClick={() => navigate(target, "contact")}
                    >
                      ENQUIRE NOW
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark pt-[70px] pb-[90px] text-white max-[800px]:pt-[50px] max-[800px]:pb-[55px]">
        <div className="shell">
          <Reveal>
            <p className={`${EYEBROW} text-yellow`}>PLAN TO TAKE PART</p>
            <h2 className="mt-[16px] mb-[54px]">A warm welcome. A little support.</h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-x-[30px] gap-y-[18px] max-[900px]:grid-cols-2 max-[800px]:grid-cols-1">
            {PLANNING_STEPS.map(({ title, copy }, index) => (
              <Reveal key={title} delay={index * 80} className="h-full">
                <article className="h-full rounded-[14px] bg-[#2e4a4d] p-[30px] transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[#37575a]">
                  <h3 className="text-[24px] leading-[1.25]">{title}</h3>
                  <p className="mt-[16px] text-[16px] text-[#d1dfdf]">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell my-[70px] max-[800px]:my-[45px]">
        <Reveal className="grid grid-cols-2 items-start gap-x-[80px] gap-y-[30px] rounded-[20px] bg-pale px-[45px] py-[50px] max-[800px]:grid-cols-1 max-[800px]:px-[24px] max-[800px]:py-[30px]">
          <div>
            <p className={EYEBROW}>THERE’S A PLACE FOR YOU HERE</p>
            <h2 className="mt-[16px]">
              Let’s find your
              <br />
              next connection.
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[17px]">
              Ask about an event or get help planning your participation.
            </p>
            <a
              className="mt-[34px] text-[17px] text-blue transition-colors duration-200 hover:text-ink"
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>
            <a
              className="mt-[14px] text-[17px] text-blue transition-colors duration-200 hover:text-ink"
              href={CONTACT.phoneHref}
            >
              {CONTACT.phone}
            </a>
            <Button className="mt-[34px]" onClick={() => navigate("home", "contact")}>
              CONTACT US
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
