import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const dirtbagClimbingCorp: ClimbingGym = {
  name: 'Dirtbag Climbing Corp',
  website: 'https://www.dirtbagclimbingcorp.com',
  description: 'In the former Dogtooth Climbing Gym.',
  address: {
    streetNumber: '806',
    streetName: '9th St N, Unit 102',
    city: 'Golden',
    state: 'BC',
    postalCode: 'V0A 1H2',
    country: 'Canada',
    latitude: 51.304,
    longitude: -116.974,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
