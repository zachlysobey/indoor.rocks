import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { spire } from "../companies/spire";

export const spireTrainingCenter: ClimbingGym = {
  name: 'Spire Climbing + Fitness Training Center',
  parent: spire,
  description: 'Bouldering and training boards only.',
  address: {
    streetNumber: '10',
    streetName: 'Innovation Ln, Unit C',
    city: 'Bozeman',
    state: 'MT',
    postalCode: '59718',
    country: 'USA',
    latitude: 45.677,
    longitude: -111.100,
  },
  amenities: amenities('bouldering'),
};
