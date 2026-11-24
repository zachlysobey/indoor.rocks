import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const j2Bouldering: ClimbingGym = {
  name: 'J2 Bouldering',
  website: 'https://j2bouldering.com',
  description: "Bouldering only; Junction's sister gym.",
  address: {
    streetNumber: '1828',
    streetName: 'Blue Heron Dr',
    city: 'London',
    region: 'ON',
    postalCode: 'N6H',
    country: 'CA',
    latitude: 42.993,
    longitude: -81.333,
  },
  amenities: amenities('bouldering'),
};
