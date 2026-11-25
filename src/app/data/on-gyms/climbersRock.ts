import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbersRock: ClimbingGym = {
  name: "Climber's Rock",
  website: 'https://climbersrock.com',
  address: {
    streetNumber: '5155',
    streetName: 'Harvester Rd, Unit 1',
    city: 'Burlington',
    region: 'ON',
    postalCode: 'L7L 6V2',
    country: 'CA',
    latitude: 43.373,
    longitude: -79.759,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
