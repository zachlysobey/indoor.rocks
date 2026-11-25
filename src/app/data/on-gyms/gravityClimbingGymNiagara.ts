import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityClimbingGym } from "../companies/gravityClimbingGym";

export const gravityClimbingGymNiagara: ClimbingGym = {
  name: 'Gravity Climbing Gym Niagara',
  description: 'Bouldering only.',
  parent: gravityClimbingGym,
  address: {
    streetNumber: '399',
    streetName: 'Vansickle Rd, Unit 3',
    city: 'St. Catharines',
    region: 'ON',
    postalCode: 'L2S 3T4',
    country: 'CA',
    latitude: 43.156,
    longitude: -79.274,
  },
  amenities: amenities('bouldering'),
};
