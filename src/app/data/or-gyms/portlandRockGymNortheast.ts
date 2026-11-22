import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { portlandRockGym } from "../companies/portlandRockGym";

export const portlandRockGymNortheast: ClimbingGym = {
  name: 'Portland Rock Gym Northeast',
  website: 'https://www.portlandrockgym.com/northeast/',
  parent: portlandRockGym,
  address: {
    streetNumber: '21',
    streetName: 'NE 12th Ave',
    city: 'Portland',
    state: 'OR',
    postalCode: '97232',
    country: 'USA',
    latitude: 45.523,
    longitude: -122.654,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'free-weights', 'machines'),
};
