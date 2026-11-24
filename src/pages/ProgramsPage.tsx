import { useRouter } from "@/app/router";
import { Button } from "@/components/Button";
import { CtaSection } from "@/components/CtaSection";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/data/images";
import { PARTICIPANT_SUPPORT, PROGRAM_CARDS } from "@/data/programs";
import { FORMS } from "@/data/site";

const EYEBROW = "font-support text-[12px] leading-[normal] tracking-[0.03em]";
const HERO =
  "shell grid grid-cols-[1.1fr_1fr] items-start gap-[100px] pt-[56px] pb-[90px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[45px] max-[800px]:gap-[35px] max-[800px]:py-[42px]";
const HERO_INTRO =
  "mt-[30px] max-w-[610px] text-[18px] max-[800px]:mt-[22px] max-[800px]:text-[16px]";
const HERO_IMG =
  "ken-burns h-[571px] w-full rounded-[20px] object-cover max-[1000px]:h-[460px] max-[800px]:h-[330px]";
const GOALS =
  "shell grid grid-cols-[1fr_1.05fr] items-start gap-[150px] pt-[80px] pb-[100px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[50px] max-[800px]:pt-[50px] max-[800px]:pb-[55px]";
const GOAL_CARD =
  "flex items-start gap-[24px] rounded-[14px] bg-white p-[20px] shadow-[0_10px_30px_#172b2d0a] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_#172b2d14]";
const GOAL_CHIP =
  "grid h-[50px] w-[60px] shrink-0 place-items-center rounded-[10px] bg-[#dceceb] font-heading text-[20px] leading-[normal] text-ink";
const CARD_GRID =
  "grid grid-cols-3 gap-x-[40px] gap-y-[50px] max-[1100px]:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:gap-y-[30px]";
const PROGRAM_CARD =
  "group flex h-full min-h-[600px] flex-col overflow-hidden rounded-[18px] bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_#172b2d1a] max-[1100px]:min-h-[560px] max-[800px]:min-h-0";
const PROGRAM_IMG =
  "h-[214px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] max-[800px]:h-[210px]";
const PROGRAM_BODY = "flex flex-1 flex-col p-[26px] max-[800px]:p-[22px]";
const SUPPORT_ITEM =
  "flex min-h-[94px] items-center gap-[22px] rounded-[14px] bg-pale px-[26px] py-[22px] text-[15px] leading-[1.5] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#d3eceb]";

const GOALS_LIST = [
  "Build awareness, empathy, and understanding across cultures.",
  "Address racism, discrimination, and unconscious bias through education and dialogue.",
  "Improve employment readiness and workforce participation.",
  "Strengthen community connections and social inclusion.",
  "Create opportunities for leadership, advocacy, and civic engagement.",
];

const IMPACTS = [
  {
    title: "Learning together",
    copy: "Build awareness and understanding through shared learning and dialogue.",
  },
  {
    title: "Collaboration and opportunity",
    copy: "Connect across cultures and open pathways to employment and community participation.",
  },
  {
    title: "Respect and personal growth",
    copy: "Develop confidence, challenge bias, and become champions of inclusion.",
  },
  {
    title: "Stronger relationships",
    copy: "Strengthen community connections, social inclusion, and a sense of belonging.",
  },
  {
    title: "Practical skills and networks",
    copy: "Gain career and life skills, supportive networks, and an appreciation of cultural diversity.",
  },
];

export function ProgramsPage() {
  const { navigate } = useRouter();

  return (
    <>
      <section className={HERO}>
        <Reveal>
          <p className={EYEBROW}>OUR PROGRAMS · LEARN. CONNECT. PARTICIPATE.</p>
          <h1 className="mt-[22px] max-[560px]:text-[38px]">
            Multiculturalism
            <br />
            and Anti-Racism
          </h1>
          <p className={HERO_INTRO}>
            The Multiculturalism and Anti-Racism Program is a dynamic community initiative designed
            to promote inclusion, cultural understanding, equal opportunity, and social cohesion.
            Through education, mentorship, leadership development, and employment support, the
            program empowers youth, newcomers, seniors, and diverse community members to thrive
            while contributing meaningfully to society.
          </p>
          <Button
            className="mt-[158px] max-[800px]:mt-[32px]"
            href={FORMS.joinUs}
          >
            JOIN US
          </Button>
        </Reveal>
        <Reveal delay={120} direction="scale">
          <img
            className={HERO_IMG}
            src={IMG.multiculturalCommunity}
            alt="A multicultural group holding Canadian flags"
          />
        </Reveal>
      </section>

      <section className={GOALS}>
        <Reveal>
          <p className={EYEBROW}>WHAT WE WORK TOWARD</p>
          <h2 className="mt-[16px]">Our Goals</h2>
          <h3 className="mt-[34px] text-[34px] leading-[1.2] max-[800px]:text-[26px]">
            Different backgrounds.
            <br />
            Shared possibilities.
          </h3>
          <p className="mt-[26px] max-w-[400px] text-[16px]">
            Education, dialogue, mentorship and practical support bring these goals to life.
          </p>
          <Button
            className="mt-[60px] max-[800px]:mt-[32px]"
            href={FORMS.getInvolved}
          >
            GET INVOLVED
          </Button>
        </Reveal>
        <div className="flex flex-col gap-[20px]">
          {GOALS_LIST.map((goal, index) => (
            <Reveal key={goal} delay={index * 70}>
              <article className={GOAL_CARD}>
                <b className={GOAL_CHIP}>0{index + 1}</b>
                <p className="pt-[6px] text-[17px] leading-[1.55] text-ink">{goal}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell mb-[90px] max-[800px]:mb-[50px]">
        <Reveal className="rounded-[20px] bg-pale px-[45px] py-[50px] max-[800px]:px-[24px] max-[800px]:py-[30px]">
          <div className="grid grid-cols-2 items-start gap-[60px] max-[800px]:grid-cols-1 max-[800px]:gap-[18px]">
            <div>
              <p className={EYEBROW}>OPEN TO OUR COMMUNITY</p>
              <h2 className="mt-[14px]">Who can participate</h2>
            </div>
            <p className="text-[18px] leading-[1.78] max-[800px]:text-[16px]">
              The program is open to youth and young adults, newcomers, immigrants, seniors,
              community advocates, job seekers, and individuals from diverse cultural backgrounds
              who are interested in building stronger, more inclusive communities.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="shell py-[70px] max-[800px]:py-[45px]">
        <Reveal>
          <p className={EYEBROW}>FIND YOUR WAY TO TAKE PART</p>
          <h2 className="mt-[16px] mb-[38px]">Learn. Connect. Make a difference.</h2>
        </Reveal>
        <div className={CARD_GRID}>
          {PROGRAM_CARDS.map(({ title, image, copy, detail }, index) => (
            <Reveal key={title} delay={index * 70} className="h-full">
              <article className={PROGRAM_CARD}>
                <div className="overflow-hidden">
                  <img className={PROGRAM_IMG} src={image} alt="" />
                </div>
                <div className={PROGRAM_BODY}>
                  <h3 className="text-[22px] leading-[1.25]">{title}</h3>
                  <p className="mt-[22px] mb-[34px] text-[16px] leading-[1.9] max-[800px]:mb-[28px] max-[800px]:leading-[1.75]">
                    {detail ?? copy}
                  </p>
                  <Button className="mt-auto self-start" href={FORMS.joinUs}>
                    JOIN US
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={350} className="h-full">
            <article className="flex h-full flex-col rounded-[18px] bg-blue p-[36px] text-white max-[800px]:p-[28px]">
              <p className={`${EYEBROW} text-[#b3dfff]`}>LET’S CONNECT</p>
              <h2 className="mt-[24px] text-[34px] leading-[1.15] max-[800px]:text-[28px]">
                Your next step
                <br />
                starts here.
              </h2>
              <p className="mt-[24px] mb-[34px] text-[16px] text-[#d3e8f4]">
                Connect with Blooming Wells Centre to learn more about the programs and
                participation support.
              </p>
              <Button className="mt-auto self-start" onClick={() => navigate("home", "contact")}>
                CONTACT US
              </Button>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="shell pt-[40px] pb-[110px] max-[800px]:pt-[20px] max-[800px]:pb-[60px]">
        <Reveal>
          <p className={EYEBROW}>PARTICIPATION WITHOUT BARRIERS</p>
          <h2 className="mt-[16px] mb-[42px]">Accessibility and Participant Support</h2>
        </Reveal>
        <div className="grid grid-flow-col grid-rows-3 gap-x-[24px] gap-y-[20px] max-[800px]:grid-flow-row max-[800px]:grid-rows-none">
          {PARTICIPANT_SUPPORT.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <div className={SUPPORT_ITEM}>
                <span className="h-[36px] w-[6px] shrink-0 rounded-full bg-yellow" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-dark py-[70px] text-white max-[800px]:py-[50px]">
        <div className="shell">
          <Reveal>
            <p className={`${EYEBROW} text-yellow`}>EXPECTED IMPACTS</p>
            <h2 className="mt-[16px] mb-[54px]">
              Stronger people.
              <br />
              Stronger community relationships.
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-[24px] max-[900px]:grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:gap-[16px]">
            {IMPACTS.map(({ title, copy }, index) => (
              <Reveal key={title} delay={index * 80} className="h-full">
                <article className="h-full rounded-[14px] bg-[#2e4a4d] p-[26px] transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[#37575a]">
                  <h3 className="text-[20px] leading-[1.3]">{title}</h3>
                  <p className="mt-[10px] text-[15px] text-[#d1dfdf]">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid grid-cols-[0.72fr_1fr] items-start gap-[240px] pt-[110px] pb-[110px] max-[1200px]:gap-[100px] max-[800px]:grid-cols-1 max-[800px]:gap-[26px] max-[800px]:pt-[55px] max-[800px]:pb-[50px]">
        <Reveal>
          <p className={EYEBROW}>WHY IT MATTERS</p>
          <h2 className="mt-[16px]">
            Diversity is
            <br />
            a strength.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[20px] leading-[1.8] max-[800px]:text-[16px]">
            At Blooming Wells, we believe that diversity is a strength. Through intentional
            engagement and community-building initiatives, we work toward a future where everyone
            feels valued, respected, and equipped to succeed regardless of background, culture, or
            identity.
          </p>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
