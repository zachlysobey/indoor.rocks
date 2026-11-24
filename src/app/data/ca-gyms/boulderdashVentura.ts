import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderdash } from "../companies/boulderdash";

export const boulderdashVentura: ClimbingGym = {
  name: 'Boulderdash Ventura',
  website: 'https://v.boulderdashclimbing.com/',
  parent: boulderdash,
  address: {
    streetNumber: '2879',
    streetName: 'Seaborg Ave',
    city: 'Ventura',
    region: 'CA',
    postalCode: '93003',
    country: 'US',
    latitude: 34.263,
    longitude: -119.225,
  },
  amenities: amenities(),
};
