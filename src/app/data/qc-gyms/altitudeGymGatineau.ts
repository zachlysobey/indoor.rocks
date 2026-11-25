import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { altitudeGym } from "../companies/altitudeGym";

export const altitudeGymGatineau: ClimbingGym = {
  name: 'Altitude Gym Gatineau',
  description: 'In a former church.',
  parent: altitudeGym,
  address: {
    streetNumber: '35',
    streetName: 'Boul Saint-Raymond',
    city: 'Gatineau',
    region: 'QC',
    postalCode: 'J8Y 1R5',
    country: 'CA',
    latitude: 45.448,
    longitude: -75.738,
  },
  amenities: amenities('top-rope', 'lead', 'bouldering'),
};
