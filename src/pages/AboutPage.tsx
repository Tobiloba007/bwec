import { Button } from "@/components/Button";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/data/images";
import { FORMS } from "@/data/site";

const EYEBROW = "font-support text-[12px] leading-[normal] tracking-[0.03em]";
const HERO =
  "shell grid grid-cols-2 items-center gap-[40px] pt-[56px] pb-[56px] max-[900px]:grid-cols-1 max-[800px]:gap-[32px] max-[800px]:py-[40px]";
const HERO_IMG =
  "ken-burns h-[590px] w-full rounded-[20px] object-cover max-[1000px]:h-[440px] max-[800px]:h-[320px]";
const SUPPORT_ITEM =
  "flex min-h-[44px] items-center border-l-[6px] border-yellow pl-[20px] font-heading text-[20px] leading-[1.2] transition-transform duration-300 hover:translate-x-1";

const SUPPORT_AREAS = [
  "Food Donation",
  "Cloth Donation",
  "Education",
  "Skill Acquisition",
  "Health & Fitness",
  "Overall Wellbeing",
];

const MISSION_PILLARS = [
  {
    number: "01",
    title: "Relieve poverty",
    copy: "To relieve poverty by proving necessities of life such as food, clothing, formula, diapers, toys, and/or shelter to individuals and families in need.",
  },
  {
    number: "02",
    title: "Advance education",
    copy: "To advance education by providing classes on life skills, including money management, managing mental health and other topics that help develop emotional and moral maturity, the ability to effectively interact with others, teamwork, co-operation, good citizenship, and leadership skills.",
  },
  {
    number: "03",
    title: "Empower youth",
    copy: "To advance education by operating a summer camp, with a focus on topics such as computer literacy, life skills, and financial empowerment for youth.",
  },
];

export function AboutPage() {
  return (
    <>
      <section className={HERO}>
        <Reveal>
          <p className={EYEBROW}>ABOUT BLOOMING WELLS CENTRE</p>
          <h1 className="mt-[24px] max-[560px]:text-[38px]">
            Who we are.
            <br />
            Here for each other.
          </h1>
          <h3 className="mt-[46px] text-[26px] leading-[1.3] max-[800px]:text-[22px]">
            We work with people towards improving their social &amp; economic wellbeing
          </h3>
          <p className="mt-[36px] max-w-[480px] text-[16px]">
            Blooming Wells Centre door is open to individuals within the community in the areas of
            settlement, men, youths and 2SLGBTIQ,women and seniors.
          </p>
          <Button className="mt-[56px]" href={FORMS.joinUs}>
            JOIN US
          </Button>
        </Reveal>
        <Reveal delay={120} direction="scale">
          <img
            className={HERO_IMG}
            src={IMG.handsWorkingTogether}
            alt="People collaborating around a table"
          />
        </Reveal>
      </section>

      <section className="shell mt-[56px] max-[800px]:mt-[32px]">
        <Reveal className="rounded-[20px] bg-pale px-[36px] pt-[36px] pb-[64px] max-[800px]:px-[24px] max-[800px]:pt-[26px] max-[800px]:pb-[36px]">
          <p className={EYEBROW}>PRACTICAL SUPPORT. SHARED OPPORTUNITY.</p>
          <h2 className="mt-[12px] mb-[38px] text-[40px] max-[800px]:text-[30px]">
            Support for everyday life.
          </h2>
          <div className="grid grid-cols-3 gap-x-[30px] gap-y-[38px] max-[800px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-y-[22px]">
            {SUPPORT_AREAS.map((area, index) => (
              <Reveal key={area} delay={index * 70}>
                <span className={SUPPORT_ITEM}>{area}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="shell grid grid-cols-[1fr_604px] items-start gap-[24px] pt-[120px] pb-[85px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[45px] max-[800px]:pt-[60px] max-[800px]:pb-[55px]">
        <Reveal className="max-w-[530px] pt-[16px] max-[1100px]:max-w-none max-[1100px]:pt-0">
          <p className={EYEBROW}>OUR VISION</p>
          <h2 className="mt-[26px]">Our Vision</h2>
          <h3 className="mt-[30px] text-[32px] leading-[1.2] max-[800px]:text-[26px]">
            Practical help.
            <br />
            Lasting possibilities.
          </h3>
          <p className="mt-[18px] text-[17px]">
            Our vision is to provide practical assistance, to serve and provide basic life amenities
            such as food, clothing and greater learning opportunities for individuals, people in
            marginalized communities with diverse and intersecting identities/issues who continue to
            live in poverty and lack access to comprehensive services.
          </p>
          <Button className="mt-[60px]" href={FORMS.joinUs}>
            JOIN US
          </Button>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-[24px] max-[560px]:grid-cols-1">
            <img
              className="h-[540px] w-full rounded-[18px] object-cover max-[1100px]:h-[420px] max-[560px]:h-[320px]"
              src={IMG.volunteersFoodDonations}
              alt="Volunteer preparing food donations"
            />
            <img
              className="h-[540px] w-full rounded-[18px] object-cover max-[1100px]:h-[420px] max-[560px]:h-[320px]"
              src={IMG.volunteersSupportingFamilies}
              alt="Community volunteers supporting families"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-dark pt-[60px] pb-[110px] text-white max-[800px]:pt-[50px] max-[800px]:pb-[70px]">
        <div className="shell">
          <Reveal>
            <p className={`${EYEBROW} text-yellow`}>OUR MISSION</p>
            <h2 className="mt-[26px] mb-[60px] max-[560px]:text-[34px]">
              Care today. Opportunity tomorrow.
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-[30px] max-[800px]:grid-cols-1 max-[800px]:gap-[18px]">
            {MISSION_PILLARS.map(({ number, title, copy }, index) => (
              <Reveal key={number} delay={index * 90} className="h-full">
                <article className="h-full rounded-[16px] bg-[#2e4a4d] p-[30px] transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[#37575a]">
                  <b className="block text-[40px] leading-[normal] text-yellow">{number}</b>
                  <h3 className="mt-[18px] text-[26px]">{title}</h3>
                  <p className="mt-[12px] text-[16px] text-[#d1dfdf]">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
