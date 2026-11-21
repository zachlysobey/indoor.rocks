import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { planetRock } from "../companies/planetRock";

export const planetRockMadisonHeights: ClimbingGym = {
  name: 'Planet Rock Madison Heights',
  website: 'https://planet-rock.com',
  parent: planetRock,
  address: {
    streetNumber: '1103',
    streetName: 'W 13 Mile Rd',
    city: 'Madison Heights',
    state: 'MI',
    postalCode: '48071',
    country: 'USA',
    latitude: 42.517,
    longitude: -83.125,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
