import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalHold } from "../companies/verticalHold";

export const verticalHoldSanDiego: ClimbingGym = {
  name: 'Vertical Hold San Diego',
  website: 'https://www.verticalhold.com/san-diego',
  parent: verticalHold,
  address: {
    streetNumber: '2074',
    streetName: 'Hancock St',
    city: 'San Diego',
    state: 'CA',
    postalCode: '92110',
    country: 'USA',
    latitude: 32.751,
    longitude: -117.200,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
