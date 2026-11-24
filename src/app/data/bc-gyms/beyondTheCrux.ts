import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const beyondTheCrux: ClimbingGym = {
  name: 'Beyond the Crux',
  website: 'http://www.beyondthecrux.info',
  address: {
    streetNumber: '685',
    streetName: 'Finns Rd, Unit 5',
    city: 'Kelowna',
    state: 'BC',
    postalCode: 'V1X 5B7',
    country: 'Canada',
    latitude: 49.902,
    longitude: -119.382,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights'),
};
