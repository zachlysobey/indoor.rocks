import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const maitlandValleyGrotto: ClimbingGym = {
  name: 'Maitland Valley Grotto & Strength',
  description: 'A bouldering gym and 24/7 fitness gym.',
  address: {
    streetNumber: '199',
    streetName: 'Anglesea St',
    city: 'Goderich',
    region: 'ON',
    postalCode: 'N7A 0A1',
    country: 'CA',
    latitude: 43.744,
    longitude: -81.705,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
