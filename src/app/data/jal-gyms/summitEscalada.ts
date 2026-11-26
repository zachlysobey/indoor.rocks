import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const summitEscalada: ClimbingGym = {
  name: 'Summit Escalada',
  website: 'https://summitescalada.com',
  description: 'Bouldering, with a Kilter Board and spray wall.',
  address: {
    streetNumber: '4255',
    streetName: 'Av. Adolfo López Mateos Sur',
    city: 'Zapopan',
    region: 'JAL',
    postalCode: '45070',
    country: 'MX',
    latitude: 20.629,
    longitude: -103.418,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
