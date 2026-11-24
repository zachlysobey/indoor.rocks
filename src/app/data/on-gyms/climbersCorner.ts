import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbersCorner: ClimbingGym = {
  name: 'Climbers Corner',
  address: {
    streetNumber: '95',
    streetName: 'Sandford Fleming Dr',
    city: 'Collingwood',
    region: 'ON',
    postalCode: 'L9Y',
    country: 'CA',
    latitude: 44.485,
    longitude: -80.200,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
