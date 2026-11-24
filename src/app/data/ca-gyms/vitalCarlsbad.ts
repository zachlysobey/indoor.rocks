import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalCarlsbad: ClimbingGym = {
  name: 'VITAL Carlsbad',
  website: 'https://www.vitalclimbinggym.com/california',
  parent: vital,
  address: {
    streetNumber: '6102',
    streetName: 'Avenida Encinas',
    city: 'Carlsbad',
    region: 'CA',
    postalCode: '92011',
    country: 'US',
    latitude: 33.122,
    longitude: -117.320,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
