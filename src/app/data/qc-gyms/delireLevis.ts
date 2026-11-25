import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { delire } from "../companies/delire";

export const delireLevis: ClimbingGym = {
  name: 'Délire Lévis',
  parent: delire,
  address: {
    streetNumber: '44',
    streetName: 'Route du Président-Kennedy',
    city: 'Lévis',
    region: 'QC',
    postalCode: 'G6V 6C5',
    country: 'CA',
    latitude: 46.795,
    longitude: -71.178,
  },
  amenities: amenities('bouldering', 'yoga'),
};
