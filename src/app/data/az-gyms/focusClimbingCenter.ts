import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const focusClimbingCenter: ClimbingGym = {
  name: 'Focus Climbing Center',
  website: 'https://focusclimbingcenter.com/',
  description: 'Mostly bouldering, plus an auto-belay area.',
  address: {
    streetNumber: '2150',
    streetName: 'W Broadway Rd',
    city: 'Mesa',
    state: 'AZ',
    postalCode: '85202',
    country: 'USA',
    latitude: 33.407,
    longitude: -111.876,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
