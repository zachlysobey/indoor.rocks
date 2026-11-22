import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderdash } from "../companies/boulderdash";

export const boulderdashThousandOaks: ClimbingGym = {
  name: 'Boulderdash Thousand Oaks',
  website: 'https://to.boulderdashclimbing.com/',
  parent: boulderdash,
  address: {
    streetNumber: '880',
    streetName: 'Hampshire Rd',
    city: 'Thousand Oaks',
    state: 'CA',
    postalCode: '91361',
    country: 'USA',
    latitude: 34.156,
    longitude: -118.823,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
