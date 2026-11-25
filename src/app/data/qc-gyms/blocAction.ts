import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blocAction: ClimbingGym = {
  name: 'Bloc Action',
  description: 'Bouldering, with a gym and bistro.',
  address: {
    streetNumber: '285',
    streetName: 'Montée Masson',
    city: 'Mascouche',
    region: 'QC',
    postalCode: 'J7K 2L6',
    country: 'CA',
    latitude: 45.728,
    longitude: -73.617,
  },
  amenities: amenities('bouldering', 'sauna'),
};
