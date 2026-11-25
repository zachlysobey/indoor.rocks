import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderz } from "../companies/boulderz";

export const boulderzMississauga: ClimbingGym = {
  name: 'Boulderz Mississauga',
  description: 'Formerly Cave Rock Climbing.',
  parent: boulderz,
  address: {
    streetNumber: '1705',
    streetName: 'Argentia Rd, Unit 5',
    city: 'Mississauga',
    region: 'ON',
    postalCode: 'L5N 3A9',
    country: 'CA',
    latitude: 43.608,
    longitude: -79.737,
  },
  amenities: amenities('bouldering'),
};
