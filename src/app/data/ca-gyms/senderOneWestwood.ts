import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { senderOne } from "../companies/senderOne";

export const senderOneWestwood: ClimbingGym = {
  name: 'Sender One Westwood',
  website: 'https://www.senderoneclimbing.com/westwood/',
  parent: senderOne,
  address: {
    streetNumber: '10887',
    streetName: 'Lindbrook Dr',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90024',
    country: 'USA',
    latitude: 34.060,
    longitude: -118.444,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights'),
};
