import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const pacificPipe: ClimbingGym = {
  name: 'Pacific Pipe',
  website: 'https://touchstoneclimbing.com/pacific-pipe/',
  parent: touchstone,
  address: {
    streetNumber: '2140',
    streetName: 'Mandela Pkwy',
    city: 'Oakland',
    region: 'CA',
    postalCode: '94607',
    country: 'US',
    latitude: 37.818,
    longitude: -122.288,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga', 'sauna'),
};
