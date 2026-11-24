import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbNittany: ClimbingGym = {
  name: 'Climb Nittany',
  address: {
    streetNumber: '328',
    streetName: 'Discovery Dr',
    city: 'Boalsburg',
    region: 'PA',
    postalCode: '16827',
    country: 'US',
    latitude: 40.774,
    longitude: -77.786,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights'),
};
