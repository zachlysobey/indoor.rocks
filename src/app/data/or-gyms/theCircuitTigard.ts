import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theCircuit } from "../companies/theCircuit";

export const theCircuitTigard: ClimbingGym = {
  name: 'The Circuit Tigard',
  website: 'https://www.thecircuitgym.com/tigard',
  description: 'Bouldering only.',
  parent: theCircuit,
  address: {
    streetNumber: '16255',
    streetName: 'SW Upper Boones Ferry Rd',
    city: 'Tigard',
    region: 'OR',
    postalCode: '97224',
    country: 'US',
    latitude: 45.408,
    longitude: -122.738,
  },
  amenities: amenities('bouldering', 'yoga'),
};
