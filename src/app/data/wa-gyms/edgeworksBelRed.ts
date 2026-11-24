import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { edgeworks } from "../companies/edgeworks";

export const edgeworksBelRed: ClimbingGym = {
  name: 'Edgeworks Bel-Red',
  website: 'https://edgeworksclimbing.com/belred/',
  description: 'Bouldering only (Bel-Red Boulders).',
  parent: edgeworks,
  address: {
    streetNumber: '1645',
    streetName: '140th Ave NE',
    city: 'Bellevue',
    region: 'WA',
    postalCode: '98005',
    country: 'US',
    latitude: 47.626,
    longitude: -122.153,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines', 'sauna'),
};
