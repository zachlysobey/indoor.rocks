import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { planetRock } from "../companies/planetRock";

export const planetRockAnnArbor: ClimbingGym = {
  name: 'Planet Rock Ann Arbor',
  website: 'https://planet-rock.com',
  parent: planetRock,
  address: {
    streetNumber: '82',
    streetName: 'Aprill Dr',
    city: 'Ann Arbor',
    state: 'MI',
    postalCode: '48103',
    country: 'USA',
    latitude: 42.285,
    longitude: -83.835,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
