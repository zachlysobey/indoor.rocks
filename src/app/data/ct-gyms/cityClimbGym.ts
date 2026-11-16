import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cityClimbGym: ClimbingGym = {
  name: 'City Climb Gym',
  website: 'https://www.cityclimbgym.com/',
  description: 'Moved from Shelton Ave to Science Park.',
  address: {
    streetNumber: '342',
    streetName: 'Science Park',
    city: 'New Haven',
    state: 'CT',
    postalCode: '06511',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
