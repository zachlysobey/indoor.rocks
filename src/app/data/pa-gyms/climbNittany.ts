import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbNittany: ClimbingGym = {
  name: 'Climb Nittany',
  address: {
    streetNumber: '328',
    streetName: 'Discovery Dr',
    city: 'Boalsburg',
    state: 'PA',
    postalCode: '16827',
    country: 'USA',
    latitude: 40.774,
    longitude: -77.786,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights'),
};
