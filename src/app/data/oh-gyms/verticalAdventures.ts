import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { fiveLife } from "../companies/fiveLife";

export const verticalAdventures: ClimbingGym = {
  name: 'Vertical Adventures',
  website: 'https://5.life/va/',
  parent: fiveLife,
  address: {
    streetNumber: '6513',
    streetName: 'Kingsmill Ct',
    city: 'Columbus',
    region: 'OH',
    postalCode: '43229',
    country: 'US',
    latitude: 40.087,
    longitude: -82.998,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
