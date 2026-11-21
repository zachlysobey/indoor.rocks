import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { peakExperiences } from "../companies/peakExperiences";

export const peakExperiencesRichmond: ClimbingGym = {
  name: 'Peak Experiences Richmond',
  parent: peakExperiences,
  address: {
    streetNumber: '1375',
    streetName: 'Overbrook Rd',
    city: 'Richmond',
    state: 'VA',
    postalCode: '23220',
    country: 'USA',
    latitude: 37.575,
    longitude: -77.452,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
