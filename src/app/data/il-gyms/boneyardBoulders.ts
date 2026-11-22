import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { urbanaBoulders } from "../companies/urbanaBoulders";

export const boneyardBoulders: ClimbingGym = {
  name: 'Boneyard Boulders',
  website: 'https://www.urbanaboulders.com/',
  description: 'Sister gym of Urbana Boulders.',
  parent: urbanaBoulders,
  address: {
    streetNumber: '119',
    streetName: 'E University Ave',
    city: 'Champaign',
    state: 'IL',
    postalCode: '61820',
    country: 'USA',
    latitude: 40.117,
    longitude: -88.242,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
