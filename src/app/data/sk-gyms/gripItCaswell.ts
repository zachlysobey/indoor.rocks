import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gripIt } from "../companies/gripIt";

export const gripItCaswell: ClimbingGym = {
  name: 'Grip It Caswell',
  description: "Saskatchewan's largest indoor climbing gym.",
  parent: gripIt,
  address: {
    streetNumber: '501',
    streetName: '23rd St W',
    city: 'Saskatoon',
    region: 'SK',
    postalCode: 'S7L 0A4',
    country: 'CA',
    latitude: 52.135,
    longitude: -106.682,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
