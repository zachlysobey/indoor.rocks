import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { sportrock } from "../companies/sportrock";

export const sportrockRio: ClimbingGym = {
  name: 'Sportrock Rio',
  website: 'https://www.sportrock.com/rio',
  parent: sportrock,
  address: {
    streetNumber: '9811',
    streetName: 'Washingtonian Blvd',
    city: 'Gaithersburg',
    state: 'MD',
    postalCode: '20878',
    country: 'USA',
    latitude: 39.118,
    longitude: -77.201,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
