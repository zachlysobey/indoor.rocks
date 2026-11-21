import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { peakExperiences } from "../companies/peakExperiences";

export const peakExperiencesMidlothian: ClimbingGym = {
  name: 'Peak Experiences Midlothian',
  parent: peakExperiences,
  address: {
    streetNumber: '11421',
    streetName: 'Polo Cir',
    city: 'Midlothian',
    state: 'VA',
    postalCode: '23113',
    country: 'USA',
    latitude: 37.507,
    longitude: -77.610,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
