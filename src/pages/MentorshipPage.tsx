import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/data/images";
import { MENTORSHIP_SUPPORT } from "@/data/programs";
import { CONTACT } from "@/data/site";

const EYEBROW = "font-support text-[12px] tracking-[0.03em]";
const HERO =
  "shell grid min-h-[620px] grid-cols-[1.05fr_0.95fr] items-center gap-[70px] pt-[56px] pb-[72px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px] max-[800px]:py-[45px]";
const HERO_INTRO = "my-[30px] max-w-[600px] text-[17px] max-[800px]:my-[22px]";
const HERO_IMG =
  "ken-burns h-[480px] w-full rounded-[24px] object-cover max-[800px]:h-[340px]";
const CHIP =
  "rounded-lg border-l-4 border-yellow bg-pale p-4 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#d3eceb]";
const CARD =
  "group h-full rounded-2xl bg-white p-[30px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_#172b2d1a]";
const LABEL = "text-[13px] font-support leading-[normal]";
const FIELD =
  "mt-2 block w-full rounded-lg border border-[#cad7d6] p-[14px] font-body text-[14px] leading-[normal] transition-[border-color,box-shadow] duration-200 focus:border-blue focus:shadow-[0_0_0_3px_#0056931f] focus:outline-none";
const CHECKBOX = "m-0 inline w-auto";

const EXPLORE_CARDS = [
  { number: "01", title: "Career development" },
  { number: "02", title: "Education pathways" },
  { number: "03", title: "Personal growth" },
];

const SUPPORT_TOPICS = [
  "Career development",
  "Education pathways",
  "Personal growth",
];

export function MentorshipPage() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div className="shell pt-8 text-[14px] text-muted">
        Programs&nbsp; / &nbsp;Peer Mentorship Program
      </div>

      <section className={HERO}>
        <Reveal>
          <div>
            <p className={EYEBROW}>LEARN · CONNECT · GROW</p>
            <h1 className="mt-[18px]">
              Peer Mentorship
              <br />
              Program
            </h1>
            <p className={HERO_INTRO}>
              Participants connect with experienced mentors for guidance on
              career development, personal growth, education pathways, resume
              preparation, and employment opportunities.
            </p>
            <Button
              onClick={() =>
                document
                  .querySelector("#interest")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              EXPRESS INTEREST
            </Button>
            <h4>Guidance for your goals. Connections for your future.</h4>
          </div>
        </Reveal>
        <Reveal delay={120} direction="scale">
          <div>
            <img
              className={HERO_IMG}
              src={IMG.diverseCommunity}
              alt="Mentors and participants sharing ideas"
            />
            <p className="rounded-2xl bg-pale p-5 transition-transform duration-300 hover:-translate-y-0.5">
              <small className="block">
                PRACTICAL GUIDANCE. PRACTICAL OPPORTUNITY.
              </small>
              <b className="mt-[10px] block">
                Take your next step with support.
              </b>
            </p>
          </div>
        </Reveal>
      </section>

      <section className="shell py-20 max-[800px]:py-[55px]">
        <Reveal>
          <p className={EYEBROW}>SUPPORT THAT STARTS WITH YOU</p>
          <h2 className="mt-3 mb-9">What you can explore</h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-[22px] max-[800px]:grid-cols-1">
          {EXPLORE_CARDS.map(({ number, title }, index) => (
            <Reveal key={number} delay={index * 90} className="h-full">
              <article className={CARD}>
                <b className="text-[23px] text-blue">{number}</b>
                <h3 className="my-5">{title}</h3>
                <p>
                  Build confidence, develop strengths, and connect with
                  experienced mentors.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-dark py-[60px] text-white">
        <div className="shell grid grid-cols-[1fr_1.1fr] gap-[90px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px]">
          <Reveal>
            <div>
              <p className={`${EYEBROW} text-[#d1dfdf]`}>
                BELONGING STARTS WITH ACCESS
              </p>
              <h2 className="my-[14px]">Who is this for?</h2>
              <p className="text-[#d1dfdf]">
                The program is open to youth and young adults, newcomers,
                immigrants, seniors, community advocates, job seekers, and
                individuals from diverse cultural backgrounds.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-[9px]">
              <h3>Support to help you take part</h3>
              {MENTORSHIP_SUPPORT.map((item) => (
                <span className={CHIP} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="interest"
        className="shell grid grid-cols-[0.75fr_1.25fr] gap-[70px] py-20 max-[800px]:grid-cols-1 max-[800px]:gap-[35px]"
      >
        <Reveal>
          <div>
            <p className={EYEBROW}>TAKE THE NEXT STEP</p>
            <h2 className="mt-[14px] mb-6">
              Express your
              <br />
              interest.
            </h2>
            <p>
              Tell us a little about yourself and what you would like support
              with. Use this form to ask about the Peer Mentorship Program.
            </p>
            <h3 className="mt-[50px]">Have a question first?</h3>
            <a
              className="mt-2.5 block font-support text-blue transition-colors duration-200 hover:text-ink"
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>
            <a
              className="mt-2.5 block font-support text-blue transition-colors duration-200 hover:text-ink"
              href={CONTACT.phoneHref}
            >
              {CONTACT.phone}
            </a>
            <aside className="mt-[35px] rounded-[14px] bg-pale p-6">
              <b>Need an accommodation?</b>
              <p className="mt-2 text-[13px]">
                You can share your participation needs in your message, or
                contact the centre directly.
              </p>
            </aside>
          </div>
        </Reveal>

        <Reveal delay={120} direction="right">
          <form
            className="rounded-[20px] bg-white p-[38px] max-[800px]:p-[25px]"
            onSubmit={submit}
          >
            <h2>
              {sent ? "Thank you for your interest." : "Let’s start with you"}
            </h2>
            {sent ? (
              <>
                <p>We received your message and will be in touch soon.</p>
                <Button onClick={() => setSent(false)}>SEND ANOTHER</Button>
              </>
            ) : (
              <>
                <small>Fields marked * are required.</small>
                <div className="mt-[25px] grid grid-cols-2 gap-[18px] max-[800px]:grid-cols-1">
                  <label className={LABEL}>
                    First name *
                    <input
                      className={FIELD}
                      required
                      placeholder="Your first name"
                    />
                  </label>
                  <label className={LABEL}>
                    Last name *
                    <input
                      className={FIELD}
                      required
                      placeholder="Your last name"
                    />
                  </label>
                  <label className={LABEL}>
                    Email address *
                    <input
                      className={FIELD}
                      required
                      type="email"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className={LABEL}>
                    Phone number (optional)
                    <input
                      className={FIELD}
                      type="tel"
                      placeholder="Your phone number"
                    />
                  </label>
                </div>
                <fieldset className="my-6">
                  <legend className={LABEL}>
                    What would you like support with? (optional)
                  </legend>
                  {SUPPORT_TOPICS.map((topic) => (
                    <label
                      className="mt-2.5 mr-2 inline-block rounded-full border border-[#dae3e2] bg-cream px-[14px] py-2.5 text-[13px] font-support leading-[normal] transition-colors duration-200 hover:border-ink"
                      key={topic}
                    >
                      <input className={CHECKBOX} type="checkbox" /> {topic}
                    </label>
                  ))}
                </fieldset>
                <label className={LABEL}>
                  Your message (optional)
                  <textarea
                    className={`${FIELD} min-h-[110px] resize-y`}
                    placeholder="Share your goals, questions, or participation needs."
                  />
                </label>
                <label className={`my-[22px] flex items-start gap-2.5 ${LABEL}`}>
                  <input className={CHECKBOX} required type="checkbox" /> I agree
                  to be contacted by Blooming Wells Centre about my interest in
                  the Peer Mentorship Program.
                </label>
                <Button>SEND MY INTEREST</Button>
              </>
            )}
          </form>
        </Reveal>
      </section>
    </>
  );
}
