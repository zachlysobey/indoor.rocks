import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const columbusRocks: ClimbingGym = {
  name: 'Columbus Rocks Climbing and Fitness',
  description: 'Bouldering only. Formerly Columbus Rock Gym.',
  address: {
    streetNumber: '1551',
    streetName: 'Cottage Ave',
    city: 'Columbus',
    region: 'IN',
    postalCode: '47201',
    country: 'US',
    latitude: 39.209,
    longitude: -85.915,
  },
  amenities: amenities('bouldering'),
};
