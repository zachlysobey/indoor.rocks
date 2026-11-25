import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { leCrux } from "../companies/leCrux";

export const leCruxLaval: ClimbingGym = {
  name: 'Le Crux Laval',
  description: 'Bouldering, with a training area.',
  parent: leCrux,
  address: {
    streetNumber: '1850',
    streetName: 'Boul Saint-Martin O',
    city: 'Laval',
    region: 'QC',
    postalCode: 'H7S 1M9',
    country: 'CA',
    latitude: 45.566,
    longitude: -73.730,
  },
  amenities: amenities('bouldering'),
};
