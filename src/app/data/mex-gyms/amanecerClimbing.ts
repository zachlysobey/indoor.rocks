import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const amanecerClimbing: ClimbingGym = {
  name: 'Amanecer Climbing',
  description: 'Bouldering only.',
  address: {
    streetNumber: 'Mz 1 Lt 1',
    streetName: 'Blvd. Interlomas',
    city: 'Huixquilucan',
    region: 'MEX',
    postalCode: '52763',
    country: 'MX',
    latitude: 19.399,
    longitude: -99.278,
  },
  amenities: amenities('bouldering'),
};
