import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultChatham: ClimbingGym = {
  name: 'The Gravity Vault Chatham',
  website: 'https://gravityvault.com/locations/chatham-nj',
  parent: gravityVault,
  address: {
    streetNumber: '40',
    streetName: 'Watchung Ave',
    city: 'Chatham',
    state: 'NJ',
    postalCode: '07928',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
