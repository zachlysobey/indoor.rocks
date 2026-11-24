import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbmaxClimbingGym: ClimbingGym = {
  name: 'Climbmax Climbing Gym',
  website: 'https://weareclimbmax.com/',
  description: 'Two stories of bouldering plus 30-foot rope walls and a lead arch. No auto-belays.',
  address: {
    streetNumber: '1330',
    streetName: 'W Auto Dr',
    city: 'Tempe',
    region: 'AZ',
    postalCode: '85284',
    country: 'US',
    latitude: 33.351,
    longitude: -111.959,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
