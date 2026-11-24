import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rifleClimbingCenter: ClimbingGym = {
  name: 'Rifle Climbing Center',
  website: 'https://rifleclimbingcenter.com/',
  description: 'Bouldering gym with training boards.',
  address: {
    streetNumber: '139',
    streetName: 'W 3rd St',
    city: 'Rifle',
    region: 'CO',
    postalCode: '81650',
    country: 'US',
    latitude: 39.535,
    longitude: -107.784,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
