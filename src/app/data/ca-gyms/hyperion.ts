import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const hyperion: ClimbingGym = {
  name: 'Hyperion',
  website: 'https://touchstoneclimbing.com/hyperion/',
  description: 'Bouldering for now; rope walls are coming.',
  parent: touchstone,
  address: {
    streetNumber: '801',
    streetName: 'Willow St',
    city: 'Redwood City',
    region: 'CA',
    postalCode: '94063',
    country: 'US',
    latitude: 37.478,
    longitude: -122.209,
  },
  amenities: amenities('bouldering', 'yoga'),
};
