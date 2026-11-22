import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalEndeavors } from "../companies/verticalEndeavors";

export const verticalEndeavorsGlendaleHeights: ClimbingGym = {
  name: 'Vertical Endeavors Glendale Heights',
  website: 'https://verticalendeavors.com/glendale-heights/',
  parent: verticalEndeavors,
  address: {
    streetNumber: '246',
    streetName: 'Windy Point Dr',
    city: 'Glendale Heights',
    state: 'IL',
    postalCode: '60139',
    country: 'USA',
    latitude: 41.917,
    longitude: -88.073,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
