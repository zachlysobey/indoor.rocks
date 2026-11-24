import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { senderOne } from "../companies/senderOne";

export const senderOneSna: ClimbingGym = {
  name: 'Sender One SNA',
  website: 'https://www.senderoneclimbing.com/santa-ana/',
  parent: senderOne,
  address: {
    streetNumber: '1441',
    streetName: 'S Village Way',
    city: 'Santa Ana',
    region: 'CA',
    postalCode: '92705',
    country: 'US',
    latitude: 33.729,
    longitude: -117.851,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
