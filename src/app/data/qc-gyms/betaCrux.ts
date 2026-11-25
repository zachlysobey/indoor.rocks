import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const betaCrux: ClimbingGym = {
  name: 'Beta Crux',
  description: 'In a former church.',
  address: {
    streetNumber: '370',
    streetName: 'Rue Sainte-Anne',
    city: 'Saguenay',
    region: 'QC',
    postalCode: 'G7J 2M6',
    country: 'CA',
    latitude: 48.426,
    longitude: -71.069,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
