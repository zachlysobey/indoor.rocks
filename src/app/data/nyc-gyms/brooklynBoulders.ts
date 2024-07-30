import type { ClimbingGym } from "@/app/dataModel";
import { amenityMap } from "../amenityMap";

export const brooklynBoulders: ClimbingGym = {
  name: 'Brooklyn Boulders',
  address: {
    state: 'NY',
    streetNumber: '575',
    streetName: 'Degraw St',
    city: 'Brooklyn',
    postalCode: '11217',
    country: 'USA'
  },
  amenities: [
    amenityMap['bouldering'],
    amenityMap['top-rope'],
    amenityMap['machines'],
    amenityMap['free-weights'],
    amenityMap['yoga'],
    amenityMap['sauna'],
  ],
}
