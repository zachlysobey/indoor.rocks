import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const brattCaveBoulderingGym: ClimbingGym = {
  name: 'BrattCave Bouldering Gym',
  website: 'https://www.brattcavebouldering.com/',
  description: 'Bouldering only, in the Cotton Mill building.',
  address: {
    streetNumber: '74',
    streetName: 'Cotton Mill Hill, Ste A-252',
    city: 'Brattleboro',
    region: 'VT',
    postalCode: '05301',
    country: 'US',
    latitude: 42.837,
    longitude: -72.555,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
