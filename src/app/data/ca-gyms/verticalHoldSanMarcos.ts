import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalHold } from "../companies/verticalHold";

export const verticalHoldSanMarcos: ClimbingGym = {
  name: 'Vertical Hold San Marcos',
  website: 'https://www.verticalhold.com/san-marcos',
  parent: verticalHold,
  address: {
    streetNumber: '992',
    streetName: 'Rancheros Dr',
    city: 'San Marcos',
    state: 'CA',
    postalCode: '92069',
    country: 'USA',
    latitude: 33.142,
    longitude: -117.140,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
