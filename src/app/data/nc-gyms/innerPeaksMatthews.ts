import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { innerPeaks } from "../companies/innerPeaks";

export const innerPeaksMatthews: ClimbingGym = {
  name: 'Inner Peaks Matthews',
  website: 'https://innerpeaks.com',
  parent: innerPeaks,
  address: {
    streetNumber: '10715',
    streetName: 'Independence Pointe Pkwy',
    city: 'Matthews',
    state: 'NC',
    postalCode: '28105',
    country: 'USA',
    latitude: 35.130,
    longitude: -80.712,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
