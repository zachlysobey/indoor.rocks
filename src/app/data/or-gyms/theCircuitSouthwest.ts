import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theCircuit } from "../companies/theCircuit";

export const theCircuitSouthwest: ClimbingGym = {
  name: 'The Circuit Southwest',
  website: 'https://www.thecircuitgym.com/southwest',
  description: 'Bouldering only.',
  parent: theCircuit,
  address: {
    streetNumber: '6050',
    streetName: 'S Macadam Ave',
    city: 'Portland',
    region: 'OR',
    postalCode: '97239',
    country: 'US',
    latitude: 45.478,
    longitude: -122.671,
  },
  amenities: amenities('bouldering', 'yoga'),
};
