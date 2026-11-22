import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalEndeavors } from "../companies/verticalEndeavors";

export const verticalEndeavorsDuluth: ClimbingGym = {
  name: 'Vertical Endeavors Duluth',
  website: 'https://www.verticalendeavors.com/visit-us/hours-locations/duluth-mn/',
  description: 'In Canal Park.',
  parent: verticalEndeavors,
  address: {
    streetNumber: '329',
    streetName: 'S Lake Ave',
    city: 'Duluth',
    state: 'MN',
    postalCode: '55802',
    country: 'USA',
    latitude: 46.781,
    longitude: -92.096,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
