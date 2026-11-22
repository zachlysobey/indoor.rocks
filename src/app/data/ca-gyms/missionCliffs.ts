import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const missionCliffs: ClimbingGym = {
  name: 'Mission Cliffs',
  website: 'https://touchstoneclimbing.com/mission-cliffs/',
  parent: touchstone,
  address: {
    streetNumber: '2295',
    streetName: 'Harrison St',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94110',
    country: 'USA',
    latitude: 37.761,
    longitude: -122.412,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga', 'sauna'),
};
