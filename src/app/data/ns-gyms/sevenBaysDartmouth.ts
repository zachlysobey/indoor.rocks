import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { sevenBays } from "../companies/sevenBays";

export const sevenBaysDartmouth: ClimbingGym = {
  name: 'Seven Bays Dartmouth',
  description: 'Bouldering, with training boards and a café.',
  parent: sevenBays,
  address: {
    streetNumber: '201',
    streetName: 'Brownlow Ave, Unit 4',
    city: 'Dartmouth',
    region: 'NS',
    postalCode: 'B3B 1W2',
    country: 'CA',
    latitude: 44.699,
    longitude: -63.583,
  },
  amenities: amenities('bouldering'),
};
