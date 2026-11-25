import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const leRelief: ClimbingGym = {
  name: 'Le Relief',
  address: {
    streetNumber: '999',
    streetName: '9e Rue S',
    city: 'Thetford Mines',
    region: 'QC',
    postalCode: 'G6G 0G1',
    country: 'CA',
    latitude: 46.094,
    longitude: -71.265,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights'),
};
