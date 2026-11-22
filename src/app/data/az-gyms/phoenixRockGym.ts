import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const phoenixRockGym: ClimbingGym = {
  name: 'Phoenix Rock Gym',
  website: 'https://phoenixrockgym.com/',
  description: 'Two-story gym with about 17,000 sq ft of climbing on 30-foot walls.',
  address: {
    streetNumber: '1353',
    streetName: 'E University Dr',
    city: 'Tempe',
    state: 'AZ',
    postalCode: '85281',
    country: 'USA',
    latitude: 33.422,
    longitude: -111.917,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
