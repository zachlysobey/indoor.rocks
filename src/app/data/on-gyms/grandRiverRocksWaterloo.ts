import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { grandRiverRocks } from "../companies/grandRiverRocks";

export const grandRiverRocksWaterloo: ClimbingGym = {
  name: 'Grand River Rocks Waterloo',
  website: 'https://grandriverrocks.com/waterloo/',
  description: 'Bouldering only.',
  parent: grandRiverRocks,
  address: {
    streetNumber: '80',
    streetName: 'Lodge St',
    city: 'Waterloo',
    region: 'ON',
    postalCode: 'N2J 2V6',
    country: 'CA',
    latitude: 43.469,
    longitude: -80.515,
  },
  amenities: amenities('bouldering'),
};
