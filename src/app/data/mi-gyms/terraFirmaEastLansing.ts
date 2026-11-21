import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { terraFirma } from "../companies/terraFirma";

export const terraFirmaEastLansing: ClimbingGym = {
  name: 'Terra Firma East Lansing',
  description: 'Bouldering only. Opened May 2026.',
  parent: terraFirma,
  address: {
    streetNumber: '2655',
    streetName: 'E Grand River Ave',
    city: 'East Lansing',
    state: 'MI',
    postalCode: '48823',
    country: 'USA',
    latitude: 42.736,
    longitude: -84.450,
  },
  amenities: amenities('bouldering'),
};
