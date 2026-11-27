import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const erikuasClubDeEscalada: ClimbingGym = {
  name: 'Erikuas Club de Escalada',
  address: {
    streetNumber: '406',
    streetName: 'Laureles',
    city: 'Oaxaca de Juárez',
    region: 'OAX',
    postalCode: '68050',
    country: 'MX',
    latitude: 17.077,
    longitude: -96.712,
  },
  amenities: amenities('bouldering'),
};
