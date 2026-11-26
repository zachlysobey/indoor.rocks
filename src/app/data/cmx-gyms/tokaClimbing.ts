import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const tokaClimbing: ClimbingGym = {
  name: 'TOKA Climbing',
  address: {
    streetNumber: '5',
    streetName: 'Tlatilco',
    city: 'Ciudad de México',
    region: 'CMX',
    postalCode: '11350',
    country: 'MX',
    latitude: 19.453,
    longitude: -99.175,
  },
  amenities: amenities('bouldering'),
};
