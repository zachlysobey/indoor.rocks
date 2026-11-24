import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockSolidClimbingFitness: ClimbingGym = {
  name: 'Rock Solid Climbing + Fitness',
  website: 'https://www.rocksolidclimbing.com/',
  description: 'Bouldering gym with an auto-belay corner, training boards and a fitness area.',
  address: {
    streetNumber: '3949',
    streetName: 'W Costco Dr',
    city: 'Marana',
    region: 'AZ',
    postalCode: '85741',
    country: 'US',
    latitude: 32.336,
    longitude: -111.039,
  },
  amenities: amenities('bouldering', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
