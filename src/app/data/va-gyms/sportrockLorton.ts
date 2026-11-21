import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { sportrock } from "../companies/sportrock";

export const sportrockLorton: ClimbingGym = {
  name: 'Sportrock Lorton',
  website: 'https://www.sportrock.com/lorton',
  description: 'Bouldering only.',
  parent: sportrock,
  address: {
    streetNumber: '9030',
    streetName: 'Power House Rd',
    city: 'Lorton',
    state: 'VA',
    postalCode: '22079',
    country: 'USA',
    latitude: 38.699,
    longitude: -77.237,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
