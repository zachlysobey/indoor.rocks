import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const appalachianBoulderingCenter: ClimbingGym = {
  name: 'Appalachian Bouldering Center',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1225',
    streetName: 'Volunteer Pkwy',
    city: 'Bristol',
    state: 'TN',
    postalCode: '37620',
    country: 'USA',
    latitude: 36.575,
    longitude: -82.180,
  },
  amenities: amenities('bouldering'),
};
