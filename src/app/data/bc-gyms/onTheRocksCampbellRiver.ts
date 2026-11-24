import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const onTheRocksCampbellRiver: ClimbingGym = {
  name: 'On the Rocks Campbell River',
  website: 'https://rockgym.ca',
  address: {
    streetNumber: '1980',
    streetName: 'North Island Hwy, Unit B',
    city: 'Campbell River',
    state: 'BC',
    postalCode: 'V9W 2G2',
    country: 'Canada',
    latitude: 50.033,
    longitude: -125.273,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
