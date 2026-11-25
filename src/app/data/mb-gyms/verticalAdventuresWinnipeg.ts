import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const verticalAdventuresWinnipeg: ClimbingGym = {
  name: 'Vertical Adventures Winnipeg',
  website: 'https://verticaladventures.ca',
  description: "Winnipeg's first indoor climbing gym, with a Moon Board.",
  address: {
    streetNumber: '77',
    streetName: 'Paramount Rd',
    city: 'Winnipeg',
    region: 'MB',
    postalCode: 'R2X 2W6',
    country: 'CA',
    latitude: 49.940,
    longitude: -97.165,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
