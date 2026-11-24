import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { senderOne } from "../companies/senderOne";

export const senderOneLakewood: ClimbingGym = {
  name: 'Sender One Lakewood',
  website: 'https://www.senderoneclimbing.com/lakewood/',
  parent: senderOne,
  address: {
    streetNumber: '4949',
    streetName: 'Lakewood Blvd',
    city: 'Lakewood',
    region: 'CA',
    postalCode: '90712',
    country: 'US',
    latitude: 33.850,
    longitude: -118.142,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'free-weights', 'machines'),
};
