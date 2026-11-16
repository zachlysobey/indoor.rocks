import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { metroRock } from "../companies/metroRock";

export const metroRockBushwick: ClimbingGym = {
  name: 'MetroRock Bushwick',
  website: 'https://bushwick.metrorock.com/',
  parent: metroRock,
  address: {
    streetNumber: '321',
    streetName: 'Starr St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11237',
    country: 'USA',
    latitude: 40.709,
    longitude: -73.922,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'machines', 'free-weights'),
};
