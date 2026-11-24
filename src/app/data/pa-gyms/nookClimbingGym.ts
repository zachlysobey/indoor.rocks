import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const nookClimbingGym: ClimbingGym = {
  name: 'Nook Climbing Gym',
  website: 'https://www.spookynooksports.com/manheim/sports-programs/adult/sports/climbing',
  description: 'Inside the Spooky Nook Sports complex.',
  address: {
    streetNumber: '2913',
    streetName: 'Spooky Nook Rd',
    city: 'Manheim',
    region: 'PA',
    postalCode: '17545',
    country: 'US',
    latitude: 40.124,
    longitude: -76.428,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
