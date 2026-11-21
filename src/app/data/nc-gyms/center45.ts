import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const center45: ClimbingGym = {
  name: 'Center 45 Climbing and Fitness',
  website: 'https://www.center45.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '200',
    streetName: 'Den Mac Dr',
    city: 'Boone',
    state: 'NC',
    postalCode: '28607',
    country: 'USA',
    latitude: 36.215,
    longitude: -81.648,
  },
  amenities: amenities('bouldering'),
};
