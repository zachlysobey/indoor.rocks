import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const leMouv: ClimbingGym = {
  name: "Le Mouv' Espace Bloc",
  website: 'https://lemouv.ca',
  description: 'Bouldering only.',
  address: {
    streetNumber: '3811',
    streetName: 'Rue Everett',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H2A 1S8',
    country: 'CA',
    latitude: 45.565,
    longitude: -73.596,
  },
  amenities: amenities('bouldering'),
};
