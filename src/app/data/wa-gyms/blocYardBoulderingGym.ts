import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blocYardBoulderingGym: ClimbingGym = {
  name: 'Bloc Yard Bouldering Gym',
  website: 'https://www.blocyardgym.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '233',
    streetName: 'E Lyons Ave',
    city: 'Spokane',
    state: 'WA',
    postalCode: '99208',
    country: 'USA',
    latitude: 47.718,
    longitude: -117.406,
  },
  amenities: amenities('bouldering', 'machines', 'free-weights'),
};
