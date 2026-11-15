import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { centralRockGym, rockSpot } from "../companies";

// Last checked: November 2026.
export const ctGyms: ClimbingGym[] = [
  {
    name: 'Rock Climb Fairfield',
    address: {
      streetNumber: '85',
      streetName: 'Mill Plain Rd, Bldg T',
      city: 'Fairfield',
      state: 'CT',
      postalCode: '06824',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
  },
  {
    name: 'City Climb Gym',
    description: 'Moved from Shelton Ave to Science Park.',
    address: {
      streetNumber: '342',
      streetName: 'Science Park',
      city: 'New Haven',
      state: 'CT',
      postalCode: '06511',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead'),
  },
  {
    name: 'Rock Spot Climbing Wallingford',
    parent: rockSpot,
    address: {
      streetNumber: '340',
      streetName: 'Quinnipiac St',
      city: 'Wallingford',
      state: 'CT',
      postalCode: '06492',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
  },
  {
    name: 'Central Rock Gym West Hartford',
    description: 'Bouldering only. Opened 2023.',
    parent: centralRockGym,
    address: {
      streetNumber: '99',
      streetName: 'Shield St',
      city: 'West Hartford',
      state: 'CT',
      postalCode: '06110',
      country: 'USA',
    },
    amenities: amenities('bouldering'),
  },
  {
    name: 'Central Rock Gym Glastonbury',
    parent: centralRockGym,
    address: {
      streetNumber: '259',
      streetName: 'Eastern Blvd',
      city: 'Glastonbury',
      state: 'CT',
      postalCode: '06033',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
  },
  {
    name: 'Stone Age Rock Gym',
    address: {
      streetNumber: '195',
      streetName: 'Adams St',
      city: 'Manchester',
      state: 'CT',
      postalCode: '06042',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead'),
  },
];
