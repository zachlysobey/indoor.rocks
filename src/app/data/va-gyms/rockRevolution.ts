import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockRevolution: ClimbingGym = {
  name: 'Rock Revolution',
  website: 'https://www.climbrockrevolution.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2200',
    streetName: 'Old Ivy Rd',
    city: 'Charlottesville',
    state: 'VA',
    postalCode: '22903',
    country: 'USA',
    latitude: 38.047,
    longitude: -78.517,
  },
  amenities: amenities('bouldering', 'yoga'),
};
