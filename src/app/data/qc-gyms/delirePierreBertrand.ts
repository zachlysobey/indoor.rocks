import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { delire } from "../companies/delire";

export const delirePierreBertrand: ClimbingGym = {
  name: 'Délire Pierre-Bertrand',
  parent: delire,
  address: {
    streetNumber: '955',
    streetName: 'Boul Pierre-Bertrand, Suite 150',
    city: 'Québec',
    region: 'QC',
    postalCode: 'G1M 2E8',
    country: 'CA',
    latitude: 46.827,
    longitude: -71.276,
  },
  amenities: amenities('bouldering', 'yoga'),
};
