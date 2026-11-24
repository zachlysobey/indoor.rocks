import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { mesaRim } from "../companies/mesaRim";

export const mesaRimNorthCity: ClimbingGym = {
  name: 'Mesa Rim North City',
  website: 'https://mesarim.com/northcity',
  parent: mesaRim,
  address: {
    streetNumber: '285',
    streetName: 'Industrial St',
    city: 'San Marcos',
    region: 'CA',
    postalCode: '92078',
    country: 'US',
    latitude: 33.139,
    longitude: -117.164,
  },
  amenities: amenities('yoga'),
};
