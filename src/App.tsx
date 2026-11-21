import { FormEvent, useEffect, useState } from "react";

const A = "/assets/";

type Route = "home" | "about" | "programs" | "mentorship" | "events";

const routeFromPath = (): Route => {
  const value = location.pathname.replace(/^\/|\/$/g, "");
  return (
    ["about", "programs", "mentorship", "events"].includes(value)
      ? value
      : "home"
  ) as Route;
};

function Button({
  children,
  onClick,
  blue = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  blue?: boolean;
}) {
  return (
    <button
      className={blue ? "button button-blue" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Header({
  route,
  navigate,
}: {
  route: Route;
  navigate: (route: Route, anchor?: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const go = (to: Route, anchor?: string) => {
    setOpen(false);
    navigate(to, anchor);
  };
  return (
    <header className="header">
      <div className="nav shell">
        <button
          className="logo"
          onClick={() => go("home")}
          aria-label="Blooming Wells Centre home"
        >
          <img src={`${A}76425.png`} alt="Blooming Wells Centre" />
        </button>
        <button
          className="menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {(["home", "about", "programs", "events"] as Route[]).map((item) => (
            <button
              key={item}
              className={route === item ? "active" : ""}
              onClick={() => go(item)}
            >
              {item === "about" ? "ABOUT US" : item.toUpperCase()}
            </button>
          ))}
          <Button blue onClick={() => go(route, "contact")}>
            CONTACT US
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Footer({
  navigate,
}: {
  navigate: (route: Route, anchor?: string) => void;
}) {
  return (
    <footer id="contact" className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={`${A}76425.png`} alt="Blooming Wells Centre" />
          <p>
            We create a welcoming space where people from all walks of life can
            connect, learn, and grow together. Through shared experiences,
            kindness, and support, we promote opportunities and a sense of
            belonging for everyone.
          </p>
          <img
            className="social"
            src={`${A}6514d.svg`}
            alt="Facebook and LinkedIn"
          />
        </div>
        <div>
          <h4>Quick Links</h4>
          <button onClick={() => navigate("about")}>About Us</button>
          <button onClick={() => navigate("programs")}>Programs</button>
          <button onClick={() => navigate("home", "services")}>Services</button>
          <button onClick={() => navigate("events")}>Events</button>
          <button onClick={() => navigate("home", "contact")}>
            Contact Us
          </button>
        </div>
        <div>
          <h4>Contacts</h4>
          <p>18, Corporation Drive, Brampton Ontario, L6S 6A8, Canada.</p>
          <a href="mailto:bloomingwells08@gmail.com">
            bloomingwells08@gmail.com
          </a>
          <a href="tel:+16472162728">+647-216-2728</a>
        </div>
      </div>
      <div className="shell copyright">2025 BWC is powered by Locoh.</div>
    </footer>
  );
}

const CTA = ({
  navigate,
}: {
  navigate: (route: Route, anchor?: string) => void;
}) => (
  <section className="cta shell">
    <div>
      <h2>
        Many voices. One community.
        <br />A future without racism.
      </h2>
      <Button onClick={() => navigate("programs")}>GET INVOLVED</Button>
    </div>
    <img src={`${A}53f15.png`} alt="A wristband that reads spread love" />
  </section>
);

function Home({
  navigate,
}: {
  navigate: (route: Route, anchor?: string) => void;
}) {
  return (
    <>
      <section className="hero shell">
        <div>
          <p className="eyebrow">BLOOMING WELLS CENTRE · COMMUNITY SUPPORT</p>
          <h1>
            Many cultures.
            <br />
            Equal dignity.
            <br />
            Stronger together.
          </h1>
          <p>
            We create welcoming spaces where people from different backgrounds
            can come together, learn, and build meaningful connections. Through
            education, open conversations, and compassionate support, we nurture
            understanding and help create a more inclusive community.
          </p>
          <Button onClick={() => navigate("programs")}>GET INVOLVED</Button>
        </div>
        <img src={`${A}82ce4.png`} alt="A diverse community smiling together" />
      </section>
      <section className="shell action-grid" id="services">
        {[
          ["Donate", "Help create opportunity and hope.", "DONATE NOW"],
          ["Volunteer", "Share your time and make a difference.", "JOIN US"],
          ["Speak up", "Stand with us against racism.", "GET INVOLVED"],
        ].map((x, i) => (
          <article key={x[0]} className={`action action-${i}`}>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
            <Button
              blue={i === 2}
              onClick={() => navigate(i === 2 ? "programs" : "about")}
            >
              {x[2]}
            </Button>
          </article>
        ))}
      </section>
      <section className="split shell">
        <img src={`${A}e3c89.png`} alt="Community members working together" />
        <div>
          <p className="eyebrow">WHO WE ARE</p>
          <h2>Belonging starts with understanding.</h2>
          <p>
            We build awareness, empathy, and understanding across cultures.
            Through education and open dialogue, we address racism,
            discrimination, and unconscious bias.
          </p>
          <p>
            We help people prepare for employment, strengthen community
            connections, and take part in social life.
          </p>
          <Button onClick={() => navigate("about")}>READ MORE</Button>
        </div>
      </section>
      <section className="program-preview shell">
        <p className="eyebrow">LEARN · CONNECT · PARTICIPATE</p>
        <h2>Different backgrounds. Shared possibilities.</h2>
        <div className="card-grid three">
          {[
            ["Settlement and Employment Readiness", "0d973.png"],
            ["Cross-Cultural Dialogue Circles", "0e573.png"],
            ["Anti-Racism Leadership Workshops", "facd8.png"],
          ].map(([title, img]) => (
            <article className="image-card" key={title}>
              <img src={`${A}${img}`} alt="" />
              <h3>{title}</h3>
              <p>
                Practical programs designed to build skills, confidence, and
                lasting connections.
              </p>
              <button onClick={() => navigate("programs")}>LEARN MORE →</button>
            </article>
          ))}
        </div>
      </section>
      <section className="impact">
        <div className="shell">
          <h2>
            Every connection brings
            <br />
            us closer to belonging.
          </h2>
          <div className="stats">
            <b>
              350+<small>People supported</small>
            </b>
            <b>
              172+<small>Volunteer hours</small>
            </b>
            <b>
              7623+<small>Connections made</small>
            </b>
            <Button blue onClick={() => navigate("about")}>
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
      <section className="events-preview shell">
        <div>
          <p className="eyebrow">UPCOMING EVENTS</p>
          <h2>Come together. Grow together.</h2>
          {[
            "Wellness Program",
            "Seniors Program",
            "Peer Mentorship Program",
            "Anti-Racism Workshop",
          ].map((x, i) => (
            <button key={x} onClick={() => navigate("events")}>
              <span>
                {[13, 13, 19, 22][i]}
                <small>JUN</small>
              </span>
              {x}
            </button>
          ))}
        </div>
        <article>
          <img src={`${A}fc05c.png`} alt="Hands joined in support" />
          <p className="eyebrow">FEATURED EVENT</p>
          <h3>Wellness Program</h3>
          <p>Care for wellbeing through shared support and community.</p>
          <Button blue onClick={() => navigate("events")}>
            JOIN US
          </Button>
        </article>
      </section>
      <CTA navigate={navigate} />
      <section className="quote shell">
        <h2>
          We belong
          <br />
          together.
        </h2>
        <div>
          <p>
            We appreciate BWC’s dedication to the area and beyond. May the
            Father give you strength and favor, along with all the volunteers.
          </p>
          <b>Lucy Jane</b>
          <small>Community member</small>
        </div>
      </section>
    </>
  );
}

function About({
  navigate,
}: {
  navigate: (route: Route, anchor?: string) => void;
}) {
  return (
    <>
      <section className="hero shell">
        <div>
          <p className="eyebrow">ABOUT BLOOMING WELLS CENTRE</p>
          <h1>
            Who we are.
            <br />
            Here for each other.
          </h1>
          <h3>
            We work with people towards improving their social &amp; economic
            wellbeing
          </h3>
          <p>
            Blooming Wells Centre door is open to individuals within the
            community in the areas of settlement, men, youths and 2SLGBTIQ,
            women and seniors.
          </p>
          <Button onClick={() => navigate("home", "contact")}>JOIN US</Button>
        </div>
        <img src={`${A}e3c89.png`} alt="People collaborating around a table" />
      </section>
      <section className="support shell">
        <p className="eyebrow">PRACTICAL SUPPORT · SHARED OPPORTUNITY</p>
        <h2>Support for everyday life.</h2>
        <div>
          {[
            "Food Donation",
            "Cloth Donation",
            "Education",
            "Skill Acquisition",
            "Health & Fitness",
            "Overall Wellbeing",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>
      <section className="vision shell">
        <div>
          <p className="eyebrow">OUR VISION</p>
          <h2>Our Vision</h2>
          <h3>
            Practical help.
            <br />
            Lasting possibilities.
          </h3>
          <p>
            Our vision is to provide practical assistance, to train and provide
            tools for knowledge, skills and talents and create business
            opportunities for individuals, people in marginalized communities
            with diverse and intersecting identities.
          </p>
          <Button onClick={() => navigate("home", "contact")}>JOIN US</Button>
        </div>
        <img src={`${A}60ec7.png`} alt="Volunteer preparing food donations" />
        <img
          src={`${A}20295.png`}
          alt="Community volunteers supporting families"
        />
      </section>
      <section className="mission">
        <div className="shell">
          <p className="eyebrow">OUR MISSION</p>
          <h2>Care today. Opportunity tomorrow.</h2>
          <div className="card-grid three">
            {[
              ["01", "Relieve poverty"],
              ["02", "Advance education"],
              ["03", "Empower youth"],
            ].map(([n, t]) => (
              <article key={n}>
                <b>{n}</b>
                <h3>{t}</h3>
                <p>
                  Creating welcoming pathways through practical support,
                  learning, and community connection.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA navigate={navigate} />
    </>
  );
}

const programCards = [
  [
    "Peer Mentorship Program",
    "a9d9b.png",
    "Participants connect with experienced mentors for guidance on career development, personal growth, and employment opportunities.",
  ],
  [
    "Cross-Cultural Dialogue Circles",
    "0e573.png",
    "Facilitated discussions create space for people to share experiences, learn, and build mutual respect.",
  ],
  [
    "Anti-Racism Leadership Workshops",
    "de93f.png",
    "Interactive workshops build confidence, leadership skills, and practical tools for inclusion.",
  ],
  [
    "Digital Storytelling Campaign",
    "546f5.png",
    "Community voices come alive through stories that celebrate identity and belonging.",
  ],
  [
    "Employment Support Fair",
    "0d973.png",
    "Connect with practical resources, employers, and networks to take your next step.",
  ],
];

function Programs({
  navigate,
}: {
  navigate: (route: Route, anchor?: string) => void;
}) {
  return (
    <>
      <section className="hero shell">
        <div>
          <p className="eyebrow">OUR PROGRAMS · LEARN. CONNECT. PARTICIPATE.</p>
          <h1>
            Multiculturalism
            <br />
            and Anti-Racism
          </h1>
          <p>
            The Multiculturalism and Anti-Racism Program is a dynamic community
            initiative designed to promote inclusion, cultural understanding,
            equal opportunity, and social cohesion. Through education,
            mentorship, leadership development, and employment support, the
            program empowers diverse community members to thrive.
          </p>
          <Button onClick={() => navigate("home", "contact")}>JOIN US</Button>
        </div>
        <img src={`${A}d1d13.png`} alt="A multicultural community in Canada" />
      </section>
      <section className="goals shell">
        <div>
          <p className="eyebrow">WHAT WE WORK TOWARDS</p>
          <h2>Our Goals</h2>
          <h3>
            Different backgrounds.
            <br />
            Shared possibilities.
          </h3>
          <p>Together, we create meaningful opportunities for people.</p>
          <Button onClick={() => navigate("home", "contact")}>
            GET INVOLVED
          </Button>
        </div>
        <ol>
          {[
            "Build awareness, empathy, and understanding across cultures.",
            "Address racism, discrimination, and unconscious bias.",
            "Improve employment readiness and education pathways.",
            "Strengthen community connections and social inclusion.",
            "Create space for leadership, advocacy, and civic engagement.",
          ].map((x, i) => (
            <li key={x}>
              <b>0{i + 1}</b>
              {x}
            </li>
          ))}
        </ol>
      </section>
      <section className="support shell who">
        <p className="eyebrow">WHO CAN PARTICIPATE?</p>
        <div>
          <h3>Who can participate</h3>
          <p>
            The program is open to youth and young adults, newcomers,
            immigrants, seniors, community leaders, job seekers, and individuals
            from diverse cultural backgrounds.
          </p>
        </div>
      </section>
      <section className="programs shell">
        <p className="eyebrow">EXPLORE OUR PROGRAMS</p>
        <h2>Learn. Connect. Make a difference.</h2>
        <div className="card-grid three">
          {programCards.map(([title, img, copy], i) => (
            <article className="image-card" key={title}>
              <img src={`${A}${img}`} alt="" />
              <h3>{title}</h3>
              <p>{copy}</p>
              <Button
                onClick={() =>
                  navigate(i === 0 ? "mentorship" : "home", "contact")
                }
              >
                {i === 1 || i === 2 ? "BOOK" : "JOIN"}
              </Button>
            </article>
          ))}
          <article className="next-card">
            <h2>
              Your next step
              <br />
              starts here.
            </h2>
            <p>
              Not sure which program fits? Let’s find the one that works for
              you.
            </p>
            <Button onClick={() => navigate("home", "contact")}>
              CONTACT US
            </Button>
          </article>
        </div>
      </section>
      <section className="access shell">
        <p className="eyebrow">PARTICIPANT SUPPORT</p>
        <h2>Accessibility and Participant Support</h2>
        <div>
          {[
            "Transportation assistance where required",
            "Childcare support for parents and caregivers",
            "Translation and interpretation services",
            "Accessible venues and appropriate accommodations",
            "Facilitation and information in a safe space",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>
      <section className="mission">
        <div className="shell">
          <p className="eyebrow">IMPACT WE AIM FOR</p>
          <h2>
            Stronger people.
            <br />
            Stronger community relationships.
          </h2>
          <div className="pill-grid">
            {[
              "Learning together",
              "Collaboration and opportunity",
              "Respect and personal growth",
              "Stronger relationships",
              "Practical skills and networks",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="quote shell">
        <h2>
          Diversity is
          <br />a strength.
        </h2>
        <p>
          A flourishing, fair, and resilient community is shaped through shared
          experiences and community building. Inclusion, care, and respect
          create a more connected future.
        </p>
      </section>
      <CTA navigate={navigate} />
    </>
  );
}

function Mentorship({
  navigate,
}: {
  navigate: (route: Route, anchor?: string) => void;
}) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <div className="shell breadcrumb">
        Programs&nbsp; / &nbsp;Peer Mentorship Program
      </div>
      <section className="hero shell">
        <div>
          <p className="eyebrow">LEARN · CONNECT · GROW</p>
          <h1>
            Peer Mentorship
            <br />
            Program
          </h1>
          <p>
            Participants connect with experienced mentors for guidance on career
            development, personal growth, education pathways, resume
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
        <div className="hero-feature">
          <img
            src={`${A}a9d9b.png`}
            alt="Mentors and participants sharing ideas"
          />
          <p>
            <small>PRACTICAL GUIDANCE. PRACTICAL OPPORTUNITY.</small>
            <b>Take your next step with support.</b>
          </p>
        </div>
      </section>
      <section className="explore shell">
        <p className="eyebrow">SUPPORT THAT STARTS WITH YOU</p>
        <h2>What you can explore</h2>
        <div className="card-grid three">
          {[
            ["01", "Career development"],
            ["02", "Education pathways"],
            ["03", "Personal growth"],
          ].map(([n, t]) => (
            <article key={n}>
              <b>{n}</b>
              <h3>{t}</h3>
              <p>
                Build confidence, develop strengths, and connect with
                experienced mentors.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="mission fit">
        <div className="shell split-copy">
          <div>
            <p className="eyebrow">BELONGING STARTS WITH ACCESS</p>
            <h2>Who is this for?</h2>
            <p>
              The program is open to youth and young adults, newcomers,
              immigrants, seniors, community advocates, job seekers, and
              individuals from diverse cultural backgrounds.
            </p>
          </div>
          <div>
            <h3>Support to help you take part</h3>
            {[
              "Transportation assistance where required",
              "Childcare support for parents and caregivers",
              "Translation and interpretation services",
              "Accessible venues and appropriate accommodations",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </section>
      <section id="interest" className="interest shell">
        <div>
          <p className="eyebrow">TAKE THE NEXT STEP</p>
          <h2>
            Express your
            <br />
            interest.
          </h2>
          <p>
            Tell us a little about yourself and what you would like support
            with. Use this form to ask about the Peer Mentorship Program.
          </p>
          <h3>Have a question first?</h3>
          <a href="mailto:bloomingwells08@gmail.com">
            bloomingwells08@gmail.com
          </a>
          <a href="tel:+16472162728">+647-216-2728</a>
          <aside>
            <b>Need an accommodation?</b>
            <p>
              You can share your participation needs in your message, or contact
              the centre directly.
            </p>
          </aside>
        </div>
        <form onSubmit={submit}>
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
              <div className="form-grid">
                <label>
                  First name *<input required placeholder="Your first name" />
                </label>
                <label>
                  Last name *<input required placeholder="Your last name" />
                </label>
                <label>
                  Email address *
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Phone number (optional)
                  <input type="tel" placeholder="Your phone number" />
                </label>
              </div>
              <fieldset>
                <legend>What would you like support with? (optional)</legend>
                {[
                  "Career development",
                  "Education pathways",
                  "Personal growth",
                ].map((x) => (
                  <label key={x}>
                    <input type="checkbox" /> {x}
                  </label>
                ))}
              </fieldset>
              <label>
                Your message (optional)
                <textarea placeholder="Share your goals, questions, or participation needs." />
              </label>
              <label className="consent">
                <input required type="checkbox" /> I agree to be contacted by
                Blooming Wells Centre about my interest in the Peer Mentorship
                Program.
              </label>
              <Button>SEND MY INTEREST</Button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Events({
  navigate,
}: {
  navigate: (route: Route, anchor?: string) => void;
}) {
  const [filter, setFilter] = useState("All activities");
  const cards = [
    [
      "Wellness Program",
      "fc05c.png",
      "Wellbeing",
      "Free practical information and wellness support to help you care for your health and wellbeing.",
    ],
    [
      "Seniors Program",
      "37169.png",
      "Seniors",
      "Activities designed to empower and engage seniors as active members of their communities.",
    ],
    [
      "Mentorship Program",
      "a9d9b.png",
      "Learning & connection",
      "Guidance on career development, education pathways, personal growth, and employment opportunities.",
    ],
  ];
  const visible =
    filter === "All activities" ? cards : cards.filter((x) => x[2] === filter);
  return (
    <>
      <section className="hero events-hero shell">
        <div>
          <p className="eyebrow">BLOOMING WELLS CENTRE · COMMUNITY EVENTS</p>
          <h1>
            Come together.
            <br />
            Grow together.
          </h1>
          <p>
            Make connections, share experiences, and find your place in our
            community. Explore gatherings that support wellbeing, learning, and
            belonging.
          </p>
          <Button
            onClick={() =>
              document
                .querySelector("#event-list")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            EXPLORE EVENTS
          </Button>
        </div>
        <div className="event-hero-img">
          <img src={`${A}b9b25.png`} alt="Many cultures, one community" />
          <b>Many cultures. One community.</b>
        </div>
      </section>
      <section className="feature-event shell">
        <img src={`${A}0e573.png`} alt="Community members in conversation" />
        <div>
          <p className="eyebrow">BELONG · SHARE · CONNECT</p>
          <h2>
            Cross-Cultural
            <br />
            Dialogue Circles
          </h2>
          <h3>
            Different experiences.
            <br />
            Shared understanding.
          </h3>
          <p>
            Facilitated discussions that encourage participants to share
            experiences, learn from different perspectives, and build mutual
            respect.
          </p>
          <Button onClick={() => navigate("home", "contact")}>
            ASK ABOUT DATES
          </Button>
        </div>
      </section>
      <section id="event-list" className="programs shell">
        <p className="eyebrow">FIND YOUR NEXT CONNECTION</p>
        <h2>Explore community activities</h2>
        <p>
          Contact our team for current dates, times, locations, and
          participation details.
        </p>
        <div className="filters">
          {[
            "All activities",
            "Wellbeing",
            "Seniors",
            "Learning & connection",
          ].map((x) => (
            <button
              className={filter === x ? "selected" : ""}
              onClick={() => setFilter(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="card-grid three">
          {visible.map(([title, img, , copy]) => (
            <article className="image-card" key={title}>
              <img src={`${A}${img}`} alt="" />
              <h3>{title}</h3>
              <p>{copy}</p>
              <Button
                onClick={() =>
                  navigate(
                    title === "Mentorship Program" ? "mentorship" : "home",
                    "contact",
                  )
                }
              >
                ENQUIRE NOW
              </Button>
            </article>
          ))}
        </div>
      </section>
      <section className="mission">
        <div className="shell">
          <p className="eyebrow">PLAN FOR THE PERSON</p>
          <h2>A warm welcome. A little support.</h2>
          <div className="card-grid three">
            {[
              [
                "Confirm the details",
                "Ask our team about the next session, venue, and how to take part.",
              ],
              [
                "Tell us what you need",
                "Ask about transport assistance, childcare, language support, and accommodations.",
              ],
              [
                "Come as you are",
                "Bring your experiences, your questions, and a willingness to connect with others.",
              ],
            ].map(([t, c]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-strip shell">
        <div>
          <p className="eyebrow">READY TO PLAN FOR YOUR NEXT STEP?</p>
          <h2>
            Let’s find your
            <br />
            next connection.
          </h2>
        </div>
        <div>
          <p>Ask about an event or get help planning your participation.</p>
          <a href="mailto:bloomingwells08@gmail.com">
            bloomingwells08@gmail.com
          </a>
          <a href="tel:+16472162728">+647-216-2728</a>
          <Button onClick={() => navigate("home", "contact")}>
            CONTACT US
          </Button>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState<Route>(routeFromPath);
  useEffect(() => {
    const fn = () => setRoute(routeFromPath());
    addEventListener("popstate", fn);
    return () => removeEventListener("popstate", fn);
  }, []);
  const navigate = (to: Route, anchor?: string) => {
    if (to !== route) {
      history.pushState({}, "", to === "home" ? "/" : `/${to}`);
      setRoute(to);
    }
    setTimeout(
      () =>
        anchor
          ? document
              .getElementById(anchor)
              ?.scrollIntoView({ behavior: "smooth" })
          : scrollTo({ top: 0, behavior: "smooth" }),
      20,
    );
  };
  const Page =
    route === "home"
      ? Home
      : route === "about"
        ? About
        : route === "programs"
          ? Programs
          : route === "mentorship"
            ? Mentorship
            : Events;
  return (
    <>
      <Header route={route} navigate={navigate} />
      <main>
        <Page navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
    </>
  );
}
