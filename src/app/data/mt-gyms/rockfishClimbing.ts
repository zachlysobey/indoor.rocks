import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockfishClimbing: ClimbingGym = {
  name: 'RockFish Climbing & Fitness',
  description: 'Bouldering only, plus a 24-hour fitness gym. Inside Whitefish Mountain Mall.',
  address: {
    streetNumber: '6475',
    streetName: 'US Highway 93 S, Ste 13',
    city: 'Whitefish',
    state: 'MT',
    postalCode: '59937',
    country: 'USA',
    latitude: 48.396,
    longitude: -114.335,
  },
  amenities: amenities('bouldering'),
};
