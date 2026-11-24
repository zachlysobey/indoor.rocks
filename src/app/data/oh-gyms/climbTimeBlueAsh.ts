import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbTime } from "../companies/climbTime";

export const climbTimeBlueAsh: ClimbingGym = {
  name: 'Climb Time Blue Ash',
  website: 'https://www.ctoba.com',
  description: 'Bouldering only.',
  parent: climbTime,
  address: {
    streetNumber: '10898',
    streetName: 'Kenwood Rd',
    city: 'Cincinnati',
    region: 'OH',
    postalCode: '45242',
    country: 'US',
    latitude: 39.261,
    longitude: -84.383,
  },
  amenities: amenities('bouldering'),
};
