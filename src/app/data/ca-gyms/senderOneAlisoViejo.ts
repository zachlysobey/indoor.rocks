import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { senderOne } from "../companies/senderOne";

export const senderOneAlisoViejo: ClimbingGym = {
  name: 'Sender One Aliso Viejo',
  website: 'https://www.senderoneclimbing.com/aliso-viejo/',
  parent: senderOne,
  address: {
    streetNumber: '26505',
    streetName: 'Aliso Creek Rd',
    city: 'Aliso Viejo',
    region: 'CA',
    postalCode: '92656',
    country: 'US',
    latitude: 33.564,
    longitude: -117.715,
  },
  amenities: amenities('bouldering', 'lead', 'yoga', 'sauna'),
};
