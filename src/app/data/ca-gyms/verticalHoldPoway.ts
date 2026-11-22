import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalHold } from "../companies/verticalHold";

export const verticalHoldPoway: ClimbingGym = {
  name: 'Vertical Hold Poway',
  website: 'https://www.verticalhold.com/poway',
  parent: verticalHold,
  address: {
    streetNumber: '13026',
    streetName: 'Stowe Dr',
    city: 'Poway',
    state: 'CA',
    postalCode: '92064',
    country: 'USA',
    latitude: 32.947,
    longitude: -117.060,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
