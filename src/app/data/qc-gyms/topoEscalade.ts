import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const topoEscalade: ClimbingGym = {
  name: 'Topo Escalade',
  description: 'Opened in December 2025.',
  address: {
    streetNumber: '15150',
    streetName: 'Boul Lacroix',
    city: 'Saint-Georges',
    region: 'QC',
    postalCode: 'G5Y 1R7',
    country: 'CA',
    latitude: 46.090,
    longitude: -70.680,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
