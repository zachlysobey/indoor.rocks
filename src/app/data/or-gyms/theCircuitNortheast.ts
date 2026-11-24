import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theCircuit } from "../companies/theCircuit";

export const theCircuitNortheast: ClimbingGym = {
  name: 'The Circuit Northeast',
  website: 'https://www.thecircuitgym.com/northeast',
  description: 'Bouldering only.',
  parent: theCircuit,
  address: {
    streetNumber: '410',
    streetName: 'NE 17th Ave',
    city: 'Portland',
    region: 'OR',
    postalCode: '97232',
    country: 'US',
    latitude: 45.526,
    longitude: -122.648,
  },
  amenities: amenities('bouldering', 'yoga'),
};
