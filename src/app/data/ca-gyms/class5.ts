import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const class5: ClimbingGym = {
  name: 'Class 5',
  website: 'https://touchstoneclimbing.com/class-5/',
  parent: touchstone,
  address: {
    streetNumber: '20120',
    streetName: 'Hawthorne Blvd',
    city: 'Torrance',
    region: 'CA',
    postalCode: '90503',
    country: 'US',
    latitude: 33.851,
    longitude: -118.352,
  },
  amenities: amenities('bouldering', 'lead', 'yoga', 'free-weights'),
};
