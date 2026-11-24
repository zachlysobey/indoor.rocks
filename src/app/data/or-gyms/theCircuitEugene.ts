import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theCircuit } from "../companies/theCircuit";

export const theCircuitEugene: ClimbingGym = {
  name: 'The Circuit Eugene',
  website: 'https://www.thecircuitgym.com/eugene',
  description: 'Bouldering only, with a bar.',
  parent: theCircuit,
  address: {
    streetNumber: '185',
    streetName: 'E 11th Ave',
    city: 'Eugene',
    region: 'OR',
    postalCode: '97401',
    country: 'US',
    latitude: 44.046,
    longitude: -123.090,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
