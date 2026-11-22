import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const verticalView: ClimbingGym = {
  name: 'Vertical View',
  website: 'https://verticalview.com',
  description: 'A 65-foot wall, plus an outdoor ropes course.',
  address: {
    streetNumber: '1334',
    streetName: 'E Bird Dog Dr',
    city: 'Meridian',
    state: 'ID',
    postalCode: '83642',
    country: 'USA',
    latitude: 43.585,
    longitude: -116.393,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
