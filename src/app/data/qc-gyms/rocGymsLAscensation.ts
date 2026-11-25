import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocGymsLAscensation: ClimbingGym = {
  name: "Roc Gyms L'Ascensation",
  address: {
    streetNumber: '2350',
    streetName: 'Av du Colisée',
    city: 'Québec',
    region: 'QC',
    postalCode: 'G1L 5A1',
    country: 'CA',
    latitude: 46.833,
    longitude: -71.246,
  },
  amenities: amenities(),
};
