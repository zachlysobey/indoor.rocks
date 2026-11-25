import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const canyonEscalade: ClimbingGym = {
  name: 'Canyon Escalade',
  website: 'https://canyonescalade.com',
  address: {
    streetNumber: '1775',
    streetName: 'Ch de Saint-Jean',
    city: 'La Prairie',
    region: 'QC',
    postalCode: 'J5R 0J2',
    country: 'CA',
    latitude: 45.396,
    longitude: -73.487,
  },
  amenities: amenities('top-rope', 'lead', 'bouldering'),
};
