import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const memphisRox: ClimbingGym = {
  name: 'Memphis Rox',
  description: 'Nonprofit gym in Soulsville.',
  address: {
    streetNumber: '879',
    streetName: 'E McLemore Ave',
    city: 'Memphis',
    state: 'TN',
    postalCode: '38106',
    country: 'USA',
    latitude: 35.116,
    longitude: -90.032,
  },
  amenities: amenities('bouldering'),
};
