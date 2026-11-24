import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { inspireRock } from "../companies/inspireRock";

export const inspireRockLubbock: ClimbingGym = {
  name: 'inSPIRE Rock Lubbock',
  website: 'https://inspirerock.com/lubbock/',
  description: 'Bouldering only.',
  parent: inspireRock,
  address: {
    streetNumber: '6703',
    streetName: 'Yonkers Ave',
    city: 'Lubbock',
    region: 'TX',
    postalCode: '79407',
    country: 'US',
    latitude: 33.539,
    longitude: -101.940,
  },
  amenities: amenities('bouldering', 'yoga'),
};
