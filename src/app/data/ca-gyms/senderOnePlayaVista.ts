import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { senderOne } from "../companies/senderOne";

export const senderOnePlayaVista: ClimbingGym = {
  name: 'Sender One Playa Vista',
  website: 'https://www.senderoneclimbing.com/playa-vista/',
  description: 'Bouldering gym.',
  parent: senderOne,
  address: {
    streetNumber: '12775',
    streetName: 'W Millennium',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90094',
    country: 'US',
    latitude: 33.975,
    longitude: -118.408,
  },
  amenities: amenities('bouldering'),
};
