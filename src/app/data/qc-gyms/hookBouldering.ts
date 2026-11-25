import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hookBouldering: ClimbingGym = {
  name: 'Hook Bouldering',
  website: 'https://hookbouldering.com',
  description: 'Bouldering, open since 2020.',
  address: {
    streetNumber: '2101',
    streetName: 'Rue Nobel',
    city: 'Sainte-Julie',
    region: 'QC',
    postalCode: 'J3E 1Z8',
    country: 'CA',
    latitude: 45.578,
    longitude: -73.337,
  },
  amenities: amenities('bouldering'),
};
