import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalWorld } from "../companies/verticalWorld";

export const verticalWorldSeattle: ClimbingGym = {
  name: 'Vertical World Seattle',
  website: 'https://seattle.verticalworld.com/',
  description: "America's first climbing gym (1987), expanded in Interbay/Magnolia.",
  parent: verticalWorld,
  address: {
    streetNumber: '2330',
    streetName: 'W Commodore Way',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98199',
    country: 'USA',
    latitude: 47.659,
    longitude: -122.389,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
