import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockRoomClimbing: ClimbingGym = {
  name: 'Rock Room Climbing',
  website: 'https://rockroomclimbing.ca',
  description: 'Bouldering only.',
  address: {
    streetNumber: '319',
    streetName: 'Victoria Ave E',
    city: 'Thunder Bay',
    region: 'ON',
    postalCode: 'P7C',
    country: 'CA',
    latitude: 48.381,
    longitude: -89.250,
  },
  amenities: amenities('bouldering'),
};
