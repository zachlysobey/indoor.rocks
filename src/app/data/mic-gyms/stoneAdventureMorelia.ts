import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const stoneAdventureMorelia: ClimbingGym = {
  name: 'Stone Adventure Morelia',
  address: {
    streetNumber: '200',
    streetName: 'Gob. Juan Manuel González Ureña',
    city: 'Morelia',
    region: 'MIC',
    postalCode: '58280',
    country: 'MX',
    latitude: 19.692,
    longitude: -101.167,
  },
  amenities: amenities(),
};
