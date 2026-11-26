import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSolid } from "../companies/rockSolid";

export const rockSolidMerida: ClimbingGym = {
  name: 'RockSolid Mérida',
  description: 'Bouldering only.',
  parent: rockSolid,
  address: {
    streetNumber: '',
    streetName: 'Calle 35 x 18',
    city: 'Mérida',
    region: 'YUC',
    postalCode: '97208',
    country: 'MX',
    latitude: 21.004,
    longitude: -89.640,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
