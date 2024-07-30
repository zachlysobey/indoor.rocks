import { ClimbingGym } from "../../dataModel";
import { amenityMap } from "../amenityMap";

export const rockClimbFairfield: ClimbingGym = {
  name: 'Rock Climb Fairfield',
  address: {
    state: 'CT',
    streetNumber: '85',
    streetName: 'Mill Plain Rd',
    city: 'Fairfield',
    postalCode: '06824',
    country: 'USA'
  },
  amenities: [
    amenityMap['bouldering'],
    amenityMap['top-rope'],
    amenityMap['auto-belays'],
    amenityMap['machines'],
    amenityMap['free-weights'],
    amenityMap['yoga'],
  ],
};
