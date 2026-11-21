import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { planetRock } from "../companies/planetRock";

export const planetRockGrandRapids: ClimbingGym = {
  name: 'Planet Rock Grand Rapids',
  website: 'https://planet-rock.com',
  description: 'Opened January 2026.',
  parent: planetRock,
  address: {
    streetNumber: '3175',
    streetName: 'Union Ave SE',
    city: 'Wyoming',
    state: 'MI',
    postalCode: '49548',
    country: 'USA',
    latitude: 42.905,
    longitude: -85.656,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
