import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { metroRock } from "../companies";

export const metroRockBushwick: ClimbingGym = {
  name: 'MetroRock Bushwick',
  parent: metroRock,
  address: {
    streetNumber: '321',
    streetName: 'Starr St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11237',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'machines', 'free-weights'),
};
