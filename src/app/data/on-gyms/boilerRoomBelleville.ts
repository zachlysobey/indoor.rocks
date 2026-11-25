import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boilerRoom } from "../companies/boilerRoom";

export const boilerRoomBelleville: ClimbingGym = {
  name: 'Boiler Room Belleville',
  description: 'Bouldering only.',
  parent: boilerRoom,
  address: {
    streetNumber: '40',
    streetName: 'Hanna Ct',
    city: 'Belleville',
    region: 'ON',
    postalCode: 'K8P 5J2',
    country: 'CA',
    latitude: 44.175,
    longitude: -77.405,
  },
  amenities: amenities('bouldering'),
};
