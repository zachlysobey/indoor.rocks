import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gripBouldering: ClimbingGym = {
  name: 'GRIP Bouldering Tijuana',
  website: 'https://gripboulderingtj.com',
  address: {
    streetNumber: '67',
    streetName: 'Calle Cedros',
    city: 'Tijuana',
    region: 'BCN',
    postalCode: '22105',
    country: 'MX',
    latitude: 32.504,
    longitude: -116.971,
  },
  amenities: amenities('bouldering'),
};
