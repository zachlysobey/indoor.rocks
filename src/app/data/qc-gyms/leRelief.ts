import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const leRelief: ClimbingGym = {
  name: 'Le Relief',
  address: {
    streetNumber: '999',
    streetName: '9e Rue S',
    city: 'Thetford Mines',
    region: 'QC',
    postalCode: 'G6G',
    country: 'CA',
    latitude: 46.090,
    longitude: -71.300,
  },
  amenities: amenities('bouldering'),
};
