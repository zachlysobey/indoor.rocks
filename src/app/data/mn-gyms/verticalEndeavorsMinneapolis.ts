import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalEndeavors } from "../companies/verticalEndeavors";

export const verticalEndeavorsMinneapolis: ClimbingGym = {
  name: 'Vertical Endeavors Minneapolis',
  website: 'https://www.verticalendeavors.com',
  parent: verticalEndeavors,
  address: {
    streetNumber: '2540',
    streetName: 'Nicollet Ave S',
    city: 'Minneapolis',
    state: 'MN',
    postalCode: '55404',
    country: 'USA',
    latitude: 44.956,
    longitude: -93.278,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
