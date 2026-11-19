import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theCrux: ClimbingGym = {
  name: 'The Crux Champlain Valley Climbing Center',
  description: 'Limited public hours; check before visiting.',
  address: {
    streetNumber: '56',
    streetName: 'Rogers Ln',
    city: 'Willsboro',
    state: 'NY',
    postalCode: '12996',
    country: 'USA',
    latitude: 44.372,
    longitude: -73.461,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
