import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blocs: ClimbingGym = {
  name: 'Blocs',
  website: 'https://blocsclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '8761',
    streetName: '51 Ave NW',
    city: 'Edmonton',
    region: 'AB',
    postalCode: 'T6E 5H1',
    country: 'CA',
    latitude: 53.486,
    longitude: -113.460,
  },
  amenities: amenities('bouldering'),
};
