import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { grandRiverRocks } from "../companies/grandRiverRocks";

export const grandRiverRocksKitchener: ClimbingGym = {
  name: 'Grand River Rocks Kitchener',
  website: 'https://grandriverrocks.com/kitchener/',
  parent: grandRiverRocks,
  address: {
    streetNumber: '264',
    streetName: 'Victoria St N',
    city: 'Kitchener',
    region: 'ON',
    postalCode: 'N2H 5C8',
    country: 'CA',
    latitude: 43.460,
    longitude: -80.497,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'free-weights'),
};
