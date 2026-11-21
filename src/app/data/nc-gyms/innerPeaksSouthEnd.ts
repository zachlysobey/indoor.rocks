import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { innerPeaks } from "../companies/innerPeaks";

export const innerPeaksSouthEnd: ClimbingGym = {
  name: 'Inner Peaks South End',
  website: 'https://innerpeaks.com/south-end/',
  parent: innerPeaks,
  address: {
    streetNumber: '2220',
    streetName: 'S Tryon St',
    city: 'Charlotte',
    state: 'NC',
    postalCode: '28203',
    country: 'USA',
    latitude: 35.214,
    longitude: -80.861,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
