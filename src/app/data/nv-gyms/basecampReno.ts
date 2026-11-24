import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const basecampReno: ClimbingGym = {
  name: 'BaseCamp Reno',
  website: 'https://www.basecampreno.com',
  description: 'In the Whitney Peak Hotel, with an outdoor wall up the side of the building.',
  address: {
    streetNumber: '255',
    streetName: 'N Virginia St',
    city: 'Reno',
    region: 'NV',
    postalCode: '89501',
    country: 'US',
    latitude: 39.528,
    longitude: -119.813,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga', 'sauna'),
};
