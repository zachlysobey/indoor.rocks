import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { gravityVault, movement } from "../companies";

// Westchester and Long Island. Last checked: November 2026.
export const nySuburbsGyms: ClimbingGym[] = [
  // Westchester
  {
    name: 'Movement Valhalla',
    description: 'Formerly The Cliffs at Valhalla.',
    parent: movement,
    address: {
      streetNumber: '1',
      streetName: 'Commerce St',
      city: 'Valhalla',
      state: 'NY',
      postalCode: '10595',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
  },
  {
    name: 'The Rock Club',
    description: 'Inside the Pine Brook Fitness building.',
    address: {
      streetNumber: '130',
      streetName: 'Rhodes St',
      city: 'New Rochelle',
      state: 'NY',
      postalCode: '10801',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead'),
  },

  // Long Island
  {
    name: 'Island Rock',
    description: "Long Island's oldest climbing gym, open since 1996.",
    address: {
      streetNumber: '60',
      streetName: 'Skyline Dr',
      city: 'Plainview',
      state: 'NY',
      postalCode: '11803',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
  },
  {
    name: 'The Gravity Vault Westbury',
    description: '2nd floor of the Samanea New York Mall.',
    parent: gravityVault,
    address: {
      streetNumber: '1500',
      streetName: 'Old Country Rd',
      city: 'Westbury',
      state: 'NY',
      postalCode: '11590',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
  },
  {
    name: 'The Gravity Vault Melville',
    parent: gravityVault,
    address: {
      streetNumber: '40',
      streetName: 'Melville Park Rd',
      city: 'Melville',
      state: 'NY',
      postalCode: '11747',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
  },
];
