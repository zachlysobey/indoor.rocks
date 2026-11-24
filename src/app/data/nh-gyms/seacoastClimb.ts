import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const seacoastClimb: ClimbingGym = {
  name: 'Seacoast Climb',
  website: 'https://www.seacoastclimb.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '6',
    streetName: 'Airfield Dr',
    city: 'Rye',
    region: 'NH',
    postalCode: '03870',
    country: 'US',
    latitude: 43.001,
    longitude: -70.803,
  },
  amenities: amenities('bouldering'),
};
