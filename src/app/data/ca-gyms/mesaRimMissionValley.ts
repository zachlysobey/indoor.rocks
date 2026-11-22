import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { mesaRim } from "../companies/mesaRim";

export const mesaRimMissionValley: ClimbingGym = {
  name: 'Mesa Rim Mission Valley',
  website: 'https://mesarim.com/missionvalley',
  parent: mesaRim,
  address: {
    streetNumber: '405',
    streetName: 'Camino del Rio S',
    city: 'San Diego',
    state: 'CA',
    postalCode: '92108',
    country: 'USA',
    latitude: 32.764,
    longitude: -117.163,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'sauna'),
};
