import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { motionBoulder } from "../companies/motionBoulder";

export const motionBoulderBugambilias: ClimbingGym = {
  name: 'Motion Boulder Bugambilias',
  parent: motionBoulder,
  address: {
    streetNumber: '3188',
    streetName: 'Av. Agua Blanca',
    city: 'Zapopan',
    region: 'JAL',
    postalCode: '45235',
    country: 'MX',
    latitude: 20.598,
    longitude: -103.448,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
