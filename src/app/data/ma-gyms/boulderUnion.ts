import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boulderUnion: ClimbingGym = {
  name: 'Boulder Union',
  description: 'Bouldering only, in a historic downtown bank building.',
  address: {
    streetNumber: '174',
    streetName: 'Union St',
    city: 'New Bedford',
    region: 'MA',
    postalCode: '02740',
    country: 'US',
    latitude: 41.635,
    longitude: -70.928,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
