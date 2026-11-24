import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { calgaryClimbingCentre } from "../companies/calgaryClimbingCentre";

export const calgaryClimbingCentreChinook: ClimbingGym = {
  name: 'Calgary Climbing Centre Chinook',
  website: 'https://www.calgaryclimbing.com/locations/chinook/',
  description: "The chain's first gym.",
  parent: calgaryClimbingCentre,
  address: {
    streetNumber: '7130',
    streetName: 'Fisher Rd SE, Unit 6',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2H 0W3',
    country: 'CA',
    latitude: 50.991,
    longitude: -114.069,
  },
  amenities: amenities('bouldering', 'auto-belays', 'free-weights'),
};
