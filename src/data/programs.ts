import type { Route } from "@/app/router";
import { IMG } from "./images";

export type ProgramCard = {
  title: string;
  image: string;
  copy: string;
  /** Longer description used on the Programs page listing. */
  detail?: string;
  target: Route;
  anchor?: string;
};

export const PROGRAM_CARDS: ProgramCard[] = [
  {
    title: "Peer Mentorship Program",
    image: IMG.employmentSupportFairActivity,
    copy: "Participants connect with experienced mentors for guidance on career development, personal growth, and employment opportunities.",
    detail:
      "Participants connect with experienced mentors for guidance on career development, personal growth, education pathways, resume preparation, and employment opportunities.",
    target: "mentorship",
  },
  {
    title: "Cross-Cultural Dialogue Circles",
    image: IMG.crossCulturalDialogueCirclesActivity,
    copy: "Facilitated discussions create space for people to share experiences, learn, and build mutual respect.",
    detail:
      "Facilitated discussions that encourage participants to share experiences, learn from different perspectives, and build mutual respect.",
    target: "home",
    anchor: "contact",
  },
  {
    title: "Anti-Racism Leadership Workshops",
    image: IMG.antiRacismLeadershipWorkshopsActivity,
    copy: "Interactive workshops build confidence, leadership skills, and practical tools for inclusion.",
    detail:
      "Interactive workshops that help participants identify bias, challenge discrimination, develop leadership skills, & become champions of inclusion.",
    target: "home",
    anchor: "contact",
  },
  {
    title: "Digital Storytelling Campaign",
    image: IMG.digitalStorytellingCampaignActivity,
    copy: "Community voices come alive through stories that celebrate identity and belonging.",
    detail:
      "Participants use photography, video, written stories, and social media to celebrate diversity, share lived experiences, and inspire positive social change.",
    target: "home",
    anchor: "contact",
  },
  {
    title: "Employment Support Fair",
    image: IMG.employmentSupportFairActivity,
    copy: "Connect with practical resources, employers, and networks to take your next step.",
    detail:
      "Career-focused sessions offering resume reviews, interview coaching, job-search support, networking opportunities, and connections to employers and training providers.",
    target: "home",
    anchor: "contact",
  },
];

export const PARTICIPANT_SUPPORT = [
  "Transportation assistance where required to reduce participation barriers.",
  "Honoraria and recognition for elders, speakers, and community facilitators.",
  "Childcare support for parents and caregivers attending program activities.",
  "Accessible and inclusive venues with appropriate accommodations.",
  "Translation and interpretation services to ensure language accessibility.",
];

export const MENTORSHIP_SUPPORT = [
  "Transportation assistance where required",
  "Childcare support for parents and caregivers",
  "Translation and interpretation services",
  "Accessible venues and appropriate accommodations",
];
