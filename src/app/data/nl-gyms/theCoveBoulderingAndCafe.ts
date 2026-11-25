import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theCoveBoulderingAndCafe: ClimbingGym = {
  name: 'The Cove Bouldering & Cafe',
  website: 'https://www.covebouldering.com',
  description: 'Bouldering only, with a café.',
  address: {
    streetNumber: '21',
    streetName: "St. Michael's Ave",
    city: "St. John's",
    region: 'NL',
    postalCode: 'A1E 1R7',
    country: 'CA',
    latitude: 47.554,
    longitude: -52.725,
  },
  amenities: amenities('bouldering'),
};
