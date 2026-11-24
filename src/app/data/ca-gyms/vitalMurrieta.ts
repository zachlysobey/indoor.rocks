import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalMurrieta: ClimbingGym = {
  name: 'VITAL Murrieta',
  website: 'https://www.vitalclimbinggym.com/california',
  parent: vital,
  address: {
    streetNumber: '29990',
    streetName: 'Technology Dr',
    city: 'Murrieta',
    region: 'CA',
    postalCode: '92563',
    country: 'US',
    latitude: 33.567,
    longitude: -117.182,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
