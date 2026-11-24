import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { triangleRockClub } from "../companies/triangleRockClub";

export const triangleRockClubSalvageYard: ClimbingGym = {
  name: 'Triangle Rock Club Salvage Yard',
  website: 'https://trianglerockclub.com',
  description: 'The largest climbing gym in North Carolina.',
  parent: triangleRockClub,
  address: {
    streetNumber: '2300',
    streetName: 'Salvage Yard Dr',
    city: 'Raleigh',
    region: 'NC',
    postalCode: '27604',
    country: 'US',
    latitude: 35.808,
    longitude: -78.618,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
