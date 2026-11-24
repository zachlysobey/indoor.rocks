import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18RanchoCucamonga: ClimbingGym = {
  name: 'Hangar 18 Rancho Cucamonga',
  website: 'https://climbhangar18.com/rancho-cucamonga/',
  description: 'Bouldering gym.',
  parent: hangar18,
  address: {
    streetNumber: '9004',
    streetName: 'Hyssop Dr',
    city: 'Rancho Cucamonga',
    region: 'CA',
    postalCode: '91730',
    country: 'US',
    latitude: 34.101,
    longitude: -117.594,
  },
  amenities: amenities('bouldering'),
};
