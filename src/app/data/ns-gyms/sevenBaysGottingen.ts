import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { sevenBays } from "../companies/sevenBays";

export const sevenBaysGottingen: ClimbingGym = {
  name: 'Seven Bays Gottingen',
  website: 'https://www.sevenbaysbouldering.com/gottingen',
  description: 'Bouldering only, with a licensed café.',
  parent: sevenBays,
  address: {
    streetNumber: '2019',
    streetName: 'Gottingen St',
    city: 'Halifax',
    region: 'NS',
    postalCode: 'B3K 3B1',
    country: 'CA',
    latitude: 44.656,
    longitude: -63.587,
  },
  amenities: amenities('bouldering'),
};
