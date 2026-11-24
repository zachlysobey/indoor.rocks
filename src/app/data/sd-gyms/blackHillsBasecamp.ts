import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blackHillsBasecamp: ClimbingGym = {
  name: 'Black Hills Basecamp',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2461',
    streetName: 'Seger Dr',
    city: 'Rapid City',
    region: 'SD',
    postalCode: '57701',
    country: 'US',
    latitude: 44.110,
    longitude: -103.209,
  },
  amenities: amenities('bouldering'),
};
