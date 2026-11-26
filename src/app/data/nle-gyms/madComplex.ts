import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const madComplex: ClimbingGym = {
  name: 'Mad Complex',
  address: {
    streetNumber: '224b',
    streetName: 'Oscar Wilde',
    city: 'Monterrey',
    region: 'NLE',
    postalCode: '64630',
    country: 'MX',
    latitude: 25.679,
    longitude: -100.369,
  },
  amenities: amenities(),
};
