import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const niagaraClimbingCenter: ClimbingGym = {
  name: 'Niagara Climbing Center',
  website: 'https://niagaraclimbingcenter.com/',
  description: "Western New York's oldest climbing gym, opened in 1998.",
  address: {
    streetNumber: '1333',
    streetName: 'Strad Ave',
    city: 'North Tonawanda',
    state: 'NY',
    postalCode: '14120',
    country: 'USA',
    latitude: 43.035,
    longitude: -78.857,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
