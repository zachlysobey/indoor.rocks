import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { gravityVault } from "../companies";

// North and central Jersey. Last checked: November 2026.
export const njGyms: ClimbingGym[] = [
  {
    name: 'The Gravity Vault Hoboken',
    parent: gravityVault,
    address: {
      streetNumber: '1423',
      streetName: 'Clinton St',
      city: 'Hoboken',
      state: 'NJ',
      postalCode: '07030',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
  },
  {
    name: 'GOAT Climbing Gym',
    description: 'Two floors of bouldering.',
    address: {
      streetNumber: '77',
      streetName: 'River St',
      city: 'Hackensack',
      state: 'NJ',
      postalCode: '07601',
      country: 'USA',
    },
    amenities: amenities('bouldering'),
  },
  {
    name: 'Method Climbing',
    address: {
      streetNumber: '16',
      streetName: 'Lombardy St',
      city: 'Newark',
      state: 'NJ',
      postalCode: '07102',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
  },
  {
    name: 'The Gravity Vault Montclair',
    description: "Gravity Vault's first bouldering-only gym.",
    parent: gravityVault,
    address: {
      streetNumber: '8',
      streetName: 'Seymour Plaza',
      city: 'Montclair',
      state: 'NJ',
      postalCode: '07042',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'machines', 'free-weights', 'yoga'),
  },
  {
    name: 'The Gravity Vault Upper Saddle River',
    parent: gravityVault,
    address: {
      streetNumber: '107',
      streetName: 'Pleasant Ave',
      city: 'Upper Saddle River',
      state: 'NJ',
      postalCode: '07458',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
  },
  {
    name: 'The Gravity Vault Chatham',
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
  },
  {
    name: 'New Jersey Rock Gym',
    address: {
      streetNumber: '373',
      streetName: 'US-46, Bldg D',
      city: 'Fairfield',
      state: 'NJ',
      postalCode: '07004',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
  },
  {
    name: 'Garden State Rocks',
    address: {
      streetNumber: '705',
      streetName: 'Ginesi Dr',
      city: 'Morganville',
      state: 'NJ',
      postalCode: '07751',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead'),
  },
];
