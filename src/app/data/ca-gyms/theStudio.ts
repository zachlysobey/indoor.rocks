import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const theStudio: ClimbingGym = {
  name: 'The Studio',
  website: 'https://touchstoneclimbing.com/the-studio/',
  parent: touchstone,
  address: {
    streetNumber: '396',
    streetName: 'S 1st St',
    city: 'San Jose',
    region: 'CA',
    postalCode: '95113',
    country: 'US',
    latitude: 37.330,
    longitude: -121.884,
  },
  amenities: amenities('bouldering', 'lead', 'yoga', 'sauna'),
};
