import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { alta } from "../companies/alta";

export const altaChandler: ClimbingGym = {
  name: 'Alta Chandler',
  website: 'https://www.altaclimbing.com/chandler',
  description: 'Bouldering only.',
  parent: alta,
  address: {
    streetNumber: '2945',
    streetName: 'S Alma School Rd',
    city: 'Chandler',
    state: 'AZ',
    postalCode: '85286',
    country: 'USA',
    latitude: 33.263,
    longitude: -111.858,
  },
  amenities: amenities('bouldering', 'yoga'),
};
