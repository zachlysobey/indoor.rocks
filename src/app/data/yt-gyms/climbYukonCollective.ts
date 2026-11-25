import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbYukonCollective: ClimbingGym = {
  name: 'Climb Yukon Collective',
  website: 'https://www.climbyukon.com',
  description: 'Run by the nonprofit Climb Yukon, with 46-foot rope walls and a Kilter Board.',
  address: {
    streetNumber: '35',
    streetName: 'Goddard Way',
    city: 'Whitehorse',
    region: 'YT',
    postalCode: 'Y1A 0R2',
    country: 'CA',
    latitude: 60.794,
    longitude: -135.165,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
