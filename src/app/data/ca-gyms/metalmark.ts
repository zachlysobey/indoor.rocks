import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const metalmark: ClimbingGym = {
  name: 'Metalmark',
  website: 'https://touchstoneclimbing.com/metalmark/',
  parent: touchstone,
  address: {
    streetNumber: '4042',
    streetName: 'N Cedar Ave',
    city: 'Fresno',
    state: 'CA',
    postalCode: '93726',
    country: 'USA',
    latitude: 36.790,
    longitude: -119.754,
  },
  amenities: amenities('bouldering', 'lead', 'yoga'),
};
