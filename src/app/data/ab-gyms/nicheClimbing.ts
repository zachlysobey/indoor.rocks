import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockJungleClimbing } from "../companies/rockJungleClimbing";

export const nicheClimbing: ClimbingGym = {
  name: 'Niche Climbing',
  description: 'Bouldering, with a Kilter Board.',
  parent: rockJungleClimbing,
  address: {
    streetNumber: '10340',
    streetName: '71 Ave NW',
    city: 'Edmonton',
    region: 'AB',
    postalCode: 'T6E',
    country: 'CA',
    latitude: 53.507,
    longitude: -113.499,
  },
  amenities: amenities('bouldering'),
};
