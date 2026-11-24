import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theHive } from "../companies/theHive";

export const theHiveVancouver: ClimbingGym = {
  name: 'The Hive Vancouver',
  description: 'Bouldering only.',
  parent: theHive,
  address: {
    streetNumber: '520',
    streetName: 'Industrial Ave',
    city: 'Vancouver',
    state: 'BC',
    postalCode: 'V6A 2P3',
    country: 'Canada',
    latitude: 49.271,
    longitude: -123.094,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
