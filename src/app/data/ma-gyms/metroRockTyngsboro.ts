import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { metroRock } from "../companies/metroRock";

export const metroRockTyngsboro: ClimbingGym = {
  name: 'MetroRock Tyngsboro',
  website: 'https://tyngsboro.metrorock.com/',
  parent: metroRock,
  address: {
    streetNumber: '440',
    streetName: 'Middlesex Rd',
    city: 'Tyngsborough',
    region: 'MA',
    postalCode: '01879',
    country: 'US',
    latitude: 42.697,
    longitude: -71.444,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
