import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalExcape } from "../companies/verticalExcape";

export const verticalExcapeEvansville: ClimbingGym = {
  name: 'Vertical eXcape Evansville',
  website: 'https://evansville.verticalexcape.com',
  parent: verticalExcape,
  address: {
    streetNumber: '1315',
    streetName: 'N Royal Ave',
    city: 'Evansville',
    state: 'IN',
    postalCode: '47715',
    country: 'USA',
    latitude: 37.988,
    longitude: -87.495,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
