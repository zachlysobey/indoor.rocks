import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const wallCrawlerRockClub: ClimbingGym = {
  name: 'Wall Crawler Rock Club',
  description: 'In Candler Park.',
  address: {
    streetNumber: '1522',
    streetName: 'DeKalb Ave NE',
    city: 'Atlanta',
    state: 'GA',
    postalCode: '30307',
    country: 'USA',
    latitude: 33.762,
    longitude: -84.338,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
