import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalExcape } from "../companies/verticalExcape";

export const verticalExcapeBowlingGreen: ClimbingGym = {
  name: 'Vertical eXcape Bowling Green',
  parent: verticalExcape,
  address: {
    streetNumber: '121',
    streetName: 'Flex Park Dr',
    city: 'Bowling Green',
    state: 'KY',
    postalCode: '42101',
    country: 'USA',
    latitude: 36.965,
    longitude: -86.470,
  },
  amenities: amenities('auto-belays'),
};
