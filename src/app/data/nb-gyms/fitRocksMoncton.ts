import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { fitRocks } from "../companies/fitRocks";

export const fitRocksMoncton: ClimbingGym = {
  name: 'Fit Rocks Moncton',
  description: 'Mostly bouldering, with an interactive wall.',
  parent: fitRocks,
  address: {
    streetNumber: '290',
    streetName: 'Baig Blvd, Unit B-12',
    city: 'Moncton',
    region: 'NB',
    postalCode: 'E1E',
    country: 'CA',
    latitude: 46.111,
    longitude: -64.748,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
