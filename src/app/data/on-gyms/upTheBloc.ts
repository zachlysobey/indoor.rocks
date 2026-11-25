import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const upTheBloc: ClimbingGym = {
  name: 'Up the Bloc',
  website: 'https://upthebloc.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1224',
    streetName: 'Dundas St E, Unit 28',
    city: 'Mississauga',
    region: 'ON',
    postalCode: 'L4Y 2C5',
    country: 'CA',
    latitude: 43.604,
    longitude: -79.592,
  },
  amenities: amenities('bouldering'),
};
