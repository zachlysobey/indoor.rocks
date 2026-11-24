import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalWorld } from "../companies/verticalWorld";

export const verticalWorldNorth: ClimbingGym = {
  name: 'Vertical World North',
  website: 'https://north.verticalworld.com/',
  parent: verticalWorld,
  address: {
    streetNumber: '12300',
    streetName: 'Beverly Park Rd',
    city: 'Lynnwood',
    region: 'WA',
    postalCode: '98087',
    country: 'US',
    latitude: 47.885,
    longitude: -122.262,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
