import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theCircuit } from "../companies/theCircuit";

export const theCircuitBend: ClimbingGym = {
  name: 'The Circuit Bend',
  website: 'https://www.thecircuitgym.com/bend',
  description: 'Bouldering only, with a bar.',
  parent: theCircuit,
  address: {
    streetNumber: '63051',
    streetName: 'NE Corporate Pl',
    city: 'Bend',
    region: 'OR',
    postalCode: '97701',
    country: 'US',
    latitude: 44.083,
    longitude: -121.289,
  },
  amenities: amenities('bouldering', 'yoga'),
};
