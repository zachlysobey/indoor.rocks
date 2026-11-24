import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const caveClimbingCo: ClimbingGym = {
  name: 'Cave Climbing Co.',
  website: 'https://www.caveclimbingco.com/',
  description: 'Small bouldering gym.',
  address: {
    streetNumber: '113',
    streetName: 'Executive Center Blvd',
    city: 'El Paso',
    region: 'TX',
    postalCode: '79902',
    country: 'US',
    latitude: 31.775,
    longitude: -106.507,
  },
  amenities: amenities('bouldering'),
};
