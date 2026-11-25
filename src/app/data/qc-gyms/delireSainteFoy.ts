import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { delire } from "../companies/delire";

export const delireSainteFoy: ClimbingGym = {
  name: 'Délire Sainte-Foy',
  description: 'Bouldering, open since 2015.',
  parent: delire,
  address: {
    streetNumber: '950',
    streetName: 'Av Saint-Jean-Baptiste',
    city: 'Québec',
    region: 'QC',
    postalCode: 'G2E 5E9',
    country: 'CA',
    latitude: 46.800,
    longitude: -71.325,
  },
  amenities: amenities('bouldering', 'yoga'),
};
