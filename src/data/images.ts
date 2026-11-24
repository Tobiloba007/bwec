const A = "/assets/";

/**
 * Central map of every image used by the site. Components reference these
 * constants instead of hard-coded paths, so an asset can be renamed or moved
 * in one place.
 */
export const IMG = {
  // Brand
  logo: `${A}brand/logo.png`,
  socialLinks: `${A}brand/social-links.svg`,

  // Icons
  mapleLeaf: `${A}icons/maple-leaf.svg`,
  plusCircle: `${A}icons/plus-circle.svg`,

  // Community photography
  communityPhotograph: `${A}community/community-photograph.png`,
  communityWorkingTogether: `${A}community/community-working-together.png`,
  diverseCommunity: `${A}community/diverse-community.png`,
  handsJoinedInSupport: `${A}community/hands-joined-in-support.png`,
  handsWorkingTogether: `${A}community/hands-working-together.png`,
  multiculturalCommunity: `${A}community/multicultural-community.png`,
  volunteersFoodDonations: `${A}community/volunteers-food-donations.png`,
  volunteersSupportingFamilies: `${A}community/volunteers-supporting-families.png`,
  freeGroceries: `${A}community/groceries.png`,

  // Programs
  antiRacismLeadershipWorkshopsActivity: `${A}programs/anti-racism-leadership-workshops-activity.png`,
  crossCulturalDialogueCirclesActivity: `${A}programs/cross-cultural-dialogue-circles-activity.png`,
  digitalStorytellingCampaignActivity: `${A}programs/digital-storytelling-campaign-activity.png`,
  employmentSupportFairActivity: `${A}programs/employment-support-fair-activity.png`,
  seniorsProgram: `${A}programs/seniors-program.png`,
  wellnessProgram: `${A}programs/wellness-program.png`,
} as const;
