import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const vertigeEscalade: ClimbingGym = {
  name: 'Vertige Escalade',
  website: 'https://vertige-escalade.com',
  description: 'With a training room and climbing shop.',
  address: {
    streetNumber: '290',
    streetName: 'Rue Brooks',
    city: 'Sherbrooke',
    region: 'QC',
    postalCode: 'J1H 4X9',
    country: 'CA',
    latitude: 45.397,
    longitude: -71.889,
  },
  amenities: amenities('top-rope', 'lead', 'bouldering'),
};
