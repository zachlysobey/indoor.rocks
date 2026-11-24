import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { fiveLife } from "../companies/fiveLife";

export const blocGarten: ClimbingGym = {
  name: 'Bloc Garten',
  website: 'https://5.life',
  description: 'Bouldering only.',
  parent: fiveLife,
  address: {
    streetNumber: '512',
    streetName: 'Maier Pl',
    city: 'Columbus',
    region: 'OH',
    postalCode: '43215',
    country: 'US',
    latitude: 39.946,
    longitude: -83.000,
  },
  amenities: amenities('bouldering'),
};
