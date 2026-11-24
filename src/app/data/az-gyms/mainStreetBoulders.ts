import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { flagstaffClimbing } from "../companies/flagstaffClimbing";

export const mainStreetBoulders: ClimbingGym = {
  name: 'Main Street Boulders',
  website: 'https://www.mainstreetboulders.com/',
  description: 'Bouldering and board-training gym with staffed hours three evenings a week and 24/7 member access.',
  parent: flagstaffClimbing,
  address: {
    streetNumber: '1519',
    streetName: 'N Main St',
    city: 'Flagstaff',
    region: 'AZ',
    postalCode: '86004',
    country: 'US',
    latitude: 35.214,
    longitude: -111.598,
  },
  amenities: amenities('bouldering', 'machines'),
};
