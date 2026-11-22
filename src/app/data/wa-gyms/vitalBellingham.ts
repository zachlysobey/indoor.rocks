import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalBellingham: ClimbingGym = {
  name: 'VITAL Bellingham',
  website: 'https://www.vitalclimbinggym.com/bellingham',
  description: 'Bouldering only, with 24-hour member access.',
  parent: vital,
  address: {
    streetNumber: '1421',
    streetName: 'N State St',
    city: 'Bellingham',
    state: 'WA',
    postalCode: '98225',
    country: 'USA',
    latitude: 48.750,
    longitude: -122.475,
  },
  amenities: amenities('bouldering', 'yoga'),
};
