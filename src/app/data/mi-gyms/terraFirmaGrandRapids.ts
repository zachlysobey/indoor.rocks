import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { terraFirma } from "../companies/terraFirma";

export const terraFirmaGrandRapids: ClimbingGym = {
  name: 'Terra Firma Grand Rapids',
  description: 'Bouldering only.',
  parent: terraFirma,
  address: {
    streetNumber: '1555',
    streetName: 'Marshall Ave SE',
    city: 'Grand Rapids',
    state: 'MI',
    postalCode: '49507',
    country: 'USA',
    latitude: 42.930,
    longitude: -85.638,
  },
  amenities: amenities('bouldering'),
};
