import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalEndeavors } from "../companies/verticalEndeavors";

export const verticalEndeavorsStPaul: ClimbingGym = {
  name: 'Vertical Endeavors St. Paul',
  website: 'https://www.verticalendeavors.com/visit-us/hours-locations/st-paul-mn/',
  parent: verticalEndeavors,
  address: {
    streetNumber: '855',
    streetName: 'Phalen Blvd',
    city: 'St. Paul',
    region: 'MN',
    postalCode: '55106',
    country: 'US',
    latitude: 44.977,
    longitude: -93.070,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
