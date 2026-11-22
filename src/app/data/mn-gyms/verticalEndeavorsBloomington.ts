import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalEndeavors } from "../companies/verticalEndeavors";

export const verticalEndeavorsBloomington: ClimbingGym = {
  name: 'Vertical Endeavors Bloomington',
  website: 'https://www.verticalendeavors.com',
  parent: verticalEndeavors,
  address: {
    streetNumber: '9601',
    streetName: 'James Ave S',
    city: 'Bloomington',
    state: 'MN',
    postalCode: '55431',
    country: 'USA',
    latitude: 44.827,
    longitude: -93.298,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
