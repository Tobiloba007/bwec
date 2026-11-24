import type { Route } from "@/app/router";

export type NavItem = {
  route: Route;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { route: "home", label: "HOME" },
  { route: "about", label: "ABOUT US" },
  { route: "programs", label: "PROGRAMS" },
  { route: "events", label: "EVENTS" },
];

/** Per-route document title and description, applied on navigation. */
export const PAGE_META: Record<Route, { title: string; description: string }> = {
  home: {
    title: "Blooming Wells Centre | Many Cultures, One Community",
    description:
      "Blooming Wells Centre is a Brampton, Ontario charity creating welcoming spaces where people from all cultures connect, learn, and grow together through education, mentorship, and open dialogue.",
  },
  about: {
    title: "About Us | Blooming Wells Centre",
    description:
      "Learn about Blooming Wells Centre, a Brampton charity built on inclusion, cultural connection, and practical support for newcomer and equity-deserving communities.",
  },
  programs: {
    title: "Programs | Blooming Wells Centre",
    description:
      "Explore Blooming Wells Centre programs in Brampton: peer mentorship, cross-cultural dialogue circles, anti-racism leadership workshops, digital storytelling, and employment support.",
  },
  mentorship: {
    title: "Peer Mentorship Program | Blooming Wells Centre",
    description:
      "One-to-one peer mentorship in Brampton for career development, education pathways, resume support, and employment opportunities, with transportation and childcare assistance.",
  },
  events: {
    title: "Events | Blooming Wells Centre",
    description:
      "Community events, workshops, and gatherings hosted by Blooming Wells Centre in Brampton, Ontario. See what's coming up and how to join us.",
  },
};

export const FORMS = {
  joinUs: "https://forms.gle/yYn4RAYLiBetqqyn9",
  getInvolved: "https://forms.gle/YXCcR7zyoiLQpbbs8",
};

export const CONTACT = {
  email: "bloomingwells66@gmail.com",
  phone: "+647-216-2728",
  phoneHref: "tel:+16472162728",
  address: "18, Corporation Drive, Brampton Ontario, L6S 6B5, Canada.",
};
