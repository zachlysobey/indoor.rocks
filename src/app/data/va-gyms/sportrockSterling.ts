import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { sportrock } from "../companies/sportrock";

export const sportrockSterling: ClimbingGym = {
  name: 'Sportrock Sterling',
  website: 'https://www.sportrock.com/sterling',
  parent: sportrock,
  address: {
    streetNumber: '45935',
    streetName: 'Maries Rd',
    city: 'Sterling',
    region: 'VA',
    postalCode: '20166',
    country: 'US',
    latitude: 39.020,
    longitude: -77.415,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
