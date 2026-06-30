import { privacyPolicy, termsAndConditions } from './legalData';
import { siteMeta } from './siteMeta';
import { itineraries, routes, stationTowns } from './travelData';

export const siteData = {
  ...siteMeta,
  routes,
  stationTowns,
  itineraries,
  privacyPolicy,
  termsAndConditions,
} as const;
