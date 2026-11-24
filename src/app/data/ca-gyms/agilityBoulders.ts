import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const agilityBoulders: ClimbingGym = {
  name: 'Agility Boulders',
  website: 'https://www.agilityboulders.com/',
  description: 'Bouldering, indoor and outdoor, plus ninja parkour.',
  address: {
    streetNumber: '1404',
    streetName: '38th Ave',
    city: 'Capitola',
    region: 'CA',
    postalCode: '95010',
    country: 'US',
    latitude: 36.977,
    longitude: -121.966,
  },
  amenities: amenities('bouldering'),
};
