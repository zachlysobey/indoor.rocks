import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const reginaClimbingCentre: ClimbingGym = {
  name: 'Regina Climbing Centre',
  website: 'https://climbingcentre.ca',
  description: "Opened in 2018, as Saskatchewan's second commercial gym.",
  address: {
    streetNumber: '606',
    streetName: 'Solomon Cres, Unit B',
    city: 'Regina',
    region: 'SK',
    postalCode: 'S4N 4N7',
    country: 'CA',
    latitude: 50.468,
    longitude: -104.565,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
