import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { latitude } from "../companies/latitude";

export const latitudeHampton: ClimbingGym = {
  name: 'Latitude Climbing + Fitness Hampton',
  website: 'https://latitudeclimbing.com',
  parent: latitude,
  address: {
    streetNumber: '2021',
    streetName: 'Executive Dr',
    city: 'Hampton',
    state: 'VA',
    postalCode: '23666',
    country: 'USA',
    latitude: 37.044,
    longitude: -76.393,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
