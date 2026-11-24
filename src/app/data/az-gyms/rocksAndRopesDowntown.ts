import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rocksAndRopes } from "../companies/rocksAndRopes";

export const rocksAndRopesDowntown: ClimbingGym = {
  name: 'Rocks and Ropes Downtown',
  website: 'https://rocksandropes.com/downtown',
  description: '14,000 sq ft of climbing with 35-foot walls and dedicated lead terrain.',
  parent: rocksAndRopes,
  address: {
    streetNumber: '330',
    streetName: 'S Toole Ave',
    city: 'Tucson',
    region: 'AZ',
    postalCode: '85701',
    country: 'US',
    latitude: 32.219,
    longitude: -110.965,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
