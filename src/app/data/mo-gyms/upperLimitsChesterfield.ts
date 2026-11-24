import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { upperLimits } from "../companies/upperLimits";

export const upperLimitsChesterfield: ClimbingGym = {
  name: 'Upper Limits Chesterfield',
  parent: upperLimits,
  address: {
    streetNumber: '17375',
    streetName: 'Edison Ave',
    city: 'Chesterfield',
    region: 'MO',
    postalCode: '63005',
    country: 'US',
    latitude: 38.664,
    longitude: -90.606,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
