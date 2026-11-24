import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bcsNewPaltzClimbingGym: ClimbingGym = {
  name: "BC's New Paltz Climbing Gym",
  website: 'https://bcclimbinggym.com/',
  description: 'Bouldering only. Formerly The Inner Wall, at the foot of the Gunks.',
  address: {
    streetNumber: '234',
    streetName: 'Main St',
    city: 'New Paltz',
    region: 'NY',
    postalCode: '12561',
    country: 'US',
    latitude: 41.749,
    longitude: -74.082,
  },
  amenities: amenities('bouldering'),
};
