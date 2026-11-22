import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const redRockClimbingCenter: ClimbingGym = {
  name: 'Red Rock Climbing Center',
  website: 'https://www.redrockclimbingcenter.com',
  description: 'Also runs guided trips to Red Rock Canyon.',
  address: {
    streetNumber: '8201',
    streetName: 'W Charleston Blvd',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89117',
    country: 'USA',
    latitude: 36.158,
    longitude: -115.270,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
