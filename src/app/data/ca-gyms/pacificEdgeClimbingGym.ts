import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const pacificEdgeClimbingGym: ClimbingGym = {
  name: 'Pacific Edge Climbing Gym',
  website: 'https://www.pacificedgeclimbinggym.com/',
  address: {
    streetNumber: '104',
    streetName: 'Bronson St',
    city: 'Santa Cruz',
    region: 'CA',
    postalCode: '95062',
    country: 'US',
    latitude: 36.972,
    longitude: -122.020,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
