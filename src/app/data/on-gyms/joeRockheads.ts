import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const joeRockheads: ClimbingGym = {
  name: "Joe Rockhead's",
  website: 'http://www.joerockheads.com',
  description: "Canada's first climbing gym, open since 1990.",
  address: {
    streetNumber: '29',
    streetName: 'Fraser Ave',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M6K 1Y7',
    country: 'CA',
    latitude: 43.638,
    longitude: -79.424,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
