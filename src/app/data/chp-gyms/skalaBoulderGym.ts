import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const skalaBoulderGym: ClimbingGym = {
  name: 'Skala Boulder Gym',
  address: {
    streetNumber: '958',
    streetName: '14a. Pte. Nte.',
    city: 'Tuxtla Gutiérrez',
    region: 'CHP',
    postalCode: '29038',
    country: 'MX',
    latitude: 16.766,
    longitude: -93.133,
  },
  amenities: amenities('bouldering'),
};
