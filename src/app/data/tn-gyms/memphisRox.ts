import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const memphisRox: ClimbingGym = {
  name: 'Memphis Rox',
  description: 'Nonprofit gym in Soulsville.',
  address: {
    streetNumber: '879',
    streetName: 'E McLemore Ave',
    city: 'Memphis',
    region: 'TN',
    postalCode: '38106',
    country: 'US',
    latitude: 35.116,
    longitude: -90.032,
  },
  amenities: amenities('bouldering'),
};
