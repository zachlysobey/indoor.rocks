import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18SouthBay: ClimbingGym = {
  name: 'Hangar 18 South Bay',
  website: 'https://climbhangar18.com/south-bay/',
  parent: hangar18,
  address: {
    streetNumber: '4926',
    streetName: 'W Rosecrans Ave',
    city: 'Hawthorne',
    region: 'CA',
    postalCode: '90250',
    country: 'US',
    latitude: 33.902,
    longitude: -118.367,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
