import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { odyssey } from "../companies/odyssey";

export const odysseyGreenBay: ClimbingGym = {
  name: 'Odyssey Climbing + Fitness Green Bay',
  website: 'https://www.odysseyclimbing.com',
  parent: odyssey,
  address: {
    streetNumber: '686',
    streetName: 'Mike McCarthy Way',
    city: 'Ashwaubenon',
    region: 'WI',
    postalCode: '54304',
    country: 'US',
    latitude: 44.496,
    longitude: -88.057,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
