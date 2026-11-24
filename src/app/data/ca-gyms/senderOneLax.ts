import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { senderOne } from "../companies/senderOne";

export const senderOneLax: ClimbingGym = {
  name: 'Sender One LAX',
  website: 'https://www.senderoneclimbing.com/lax/',
  parent: senderOne,
  address: {
    streetNumber: '11220',
    streetName: 'Hindry Ave',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90045',
    country: 'US',
    latitude: 33.932,
    longitude: -118.373,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
