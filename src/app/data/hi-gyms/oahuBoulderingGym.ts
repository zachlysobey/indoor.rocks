import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const oahuBoulderingGym: ClimbingGym = {
  name: 'Oahu Bouldering Gym',
  description: 'Bouldering only.',
  address: {
    streetNumber: '94-503',
    streetName: 'Ukee St',
    city: 'Waipahu',
    region: 'HI',
    postalCode: '96797',
    country: 'US',
    latitude: 21.391,
    longitude: -158.008,
  },
  amenities: amenities('bouldering'),
};
