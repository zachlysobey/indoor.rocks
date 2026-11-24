import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boilerRoom } from "../companies/boilerRoom";

export const boilerRoomKingston: ClimbingGym = {
  name: 'Boiler Room Kingston',
  parent: boilerRoom,
  address: {
    streetNumber: '993',
    streetName: 'Princess St, Unit 12',
    city: 'Kingston',
    region: 'ON',
    postalCode: 'K7L 1H3',
    country: 'CA',
    latitude: 44.244,
    longitude: -76.523,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
