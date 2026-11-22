import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theFront } from "../companies/theFront";

export const theFrontClimbingClubSouthMain: ClimbingGym = {
  name: 'The Front Climbing Club South Main',
  website: 'https://thefrontclimbingclub.com/southmain',
  parent: theFront,
  address: {
    streetNumber: '4140',
    streetName: 'S Main St',
    city: 'Millcreek',
    state: 'UT',
    postalCode: '84107',
    country: 'USA',
    latitude: 40.684,
    longitude: -111.889,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga', 'sauna'),
};
