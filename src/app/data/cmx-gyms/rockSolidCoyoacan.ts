import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSolid } from "../companies/rockSolid";

export const rockSolidCoyoacan: ClimbingGym = {
  name: 'RockSolid Coyoacán',
  description: 'Bouldering only.',
  parent: rockSolid,
  address: {
    streetNumber: '83',
    streetName: 'Prol. Ayuntamiento',
    city: 'Ciudad de México',
    region: 'CMX',
    postalCode: '04010',
    country: 'MX',
    latitude: 19.347,
    longitude: -99.169,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
