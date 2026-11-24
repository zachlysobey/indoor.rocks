import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { latitude } from "../companies/latitude";

export const latitudeNorfolk: ClimbingGym = {
  name: 'Latitude Climbing + Fitness Norfolk',
  website: 'https://latitudeclimbing.com',
  description: 'Bouldering only.',
  parent: latitude,
  address: {
    streetNumber: '1830',
    streetName: 'Lindsay Ave',
    city: 'Norfolk',
    region: 'VA',
    postalCode: '23504',
    country: 'US',
    latitude: 36.866,
    longitude: -76.282,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
