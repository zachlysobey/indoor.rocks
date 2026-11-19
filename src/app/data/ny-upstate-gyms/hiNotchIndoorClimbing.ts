import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hiNotchIndoorClimbing: ClimbingGym = {
  name: 'Hi Notch Indoor Climbing',
  website: 'https://mtvanhoevenberg.com/todo/climbing/',
  description: 'At the Mt Van Hoevenberg Olympic Sports Complex.',
  address: {
    streetNumber: '31',
    streetName: 'Van Hoevenberg Way',
    city: 'Lake Placid',
    state: 'NY',
    postalCode: '12946',
    country: 'USA',
    latitude: 44.217,
    longitude: -73.922,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
