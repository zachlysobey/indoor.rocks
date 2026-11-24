import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocknasium: ClimbingGym = {
  name: 'Rocknasium',
  website: 'https://www.rocknasium.com/',
  address: {
    streetNumber: '720',
    streetName: 'Olive Dr',
    city: 'Davis',
    region: 'CA',
    postalCode: '95616',
    country: 'US',
    latitude: 38.541,
    longitude: -121.731,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights'),
};
