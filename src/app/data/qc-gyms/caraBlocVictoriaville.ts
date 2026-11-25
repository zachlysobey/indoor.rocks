import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const caraBlocVictoriaville: ClimbingGym = {
  name: 'Cara Bloc Victoriaville',
  description: 'In a former church. Formerly Campus Escalade.',
  address: {
    streetNumber: '247',
    streetName: 'Rue Notre-Dame E',
    city: 'Victoriaville',
    region: 'QC',
    postalCode: 'G6P 4A2',
    country: 'CA',
    latitude: 46.057,
    longitude: -71.955,
  },
  amenities: amenities('bouldering'),
};
