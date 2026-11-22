import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const sacramentoPipeworks: ClimbingGym = {
  name: 'Sacramento Pipeworks',
  website: 'https://touchstoneclimbing.com/pipeworks/',
  parent: touchstone,
  address: {
    streetNumber: '116',
    streetName: 'N 16th St',
    city: 'Sacramento',
    state: 'CA',
    postalCode: '95811',
    country: 'USA',
    latitude: 38.580,
    longitude: -121.481,
  },
  amenities: amenities('bouldering', 'lead', 'yoga', 'sauna'),
};
