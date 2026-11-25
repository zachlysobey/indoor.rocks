import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const adrenergie: ClimbingGym = {
  name: 'Adrénergie',
  address: {
    streetNumber: '1276',
    streetName: 'Rue Sainte-Julie',
    city: 'Trois-Rivières',
    region: 'QC',
    postalCode: 'G9A 1Y6',
    country: 'CA',
    latitude: 46.346,
    longitude: -72.548,
  },
  amenities: amenities(),
};
