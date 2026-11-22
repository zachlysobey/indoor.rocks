import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stronghold } from "../companies/stronghold";

export const theStrongholdEchoPark: ClimbingGym = {
  name: 'The Stronghold Echo Park',
  website: 'https://strongholdclimb.com/ep/',
  description: 'Bouldering only.',
  parent: stronghold,
  address: {
    streetNumber: '1624',
    streetName: 'W Sunset Blvd',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90026',
    country: 'USA',
    latitude: 34.077,
    longitude: -118.255,
  },
  amenities: amenities('bouldering'),
};
