import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const newOrleansBoulderLounge: ClimbingGym = {
  name: 'New Orleans Boulder Lounge',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2360',
    streetName: 'St Claude Ave',
    city: 'New Orleans',
    region: 'LA',
    postalCode: '70117',
    country: 'US',
    latitude: 29.966,
    longitude: -90.052,
  },
  amenities: amenities('bouldering', 'yoga'),
};
