import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import {
  boulderingProject,
  brooklynBoulders,
  centralRockGym,
  metroRock,
  movement,
  vital,
} from "../companies";

// Last checked against each gym's own site: November 2026.
export const nycGyms: ClimbingGym[] = [
  // Brooklyn
  {
    name: 'Bouldering Project Gowanus',
    description: 'Formerly Brooklyn Boulders Gowanus; reopened under Bouldering Project in January 2024.',
    parent: boulderingProject,
    address: {
      streetNumber: '575',
      streetName: 'Degraw St',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11217',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'free-weights', 'yoga'),
  },
  {
    name: 'Movement Gowanus',
    parent: movement,
    address: {
      streetNumber: '242',
      streetName: 'Butler St',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11217',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'sauna'),
  },
  {
    name: 'Vital Brooklyn',
    parent: vital,
    address: {
      streetNumber: '221',
      streetName: 'N 14th St',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11249',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'machines', 'free-weights', 'yoga', 'sauna'),
  },
  {
    name: 'MetroRock Bushwick',
    parent: metroRock,
    address: {
      streetNumber: '321',
      streetName: 'Starr St',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11237',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'machines', 'free-weights'),
  },
  {
    name: 'GP81',
    description: 'Moved from Greenpoint to Bushwick.',
    address: {
      streetNumber: '379',
      streetName: 'Jefferson St',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11237',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'free-weights'),
  },
  {
    name: 'Brooklyn Uprising',
    description: 'Bouldering gym in DUMBO, opened 2026. Ages 16 and up.',
    address: {
      streetNumber: '20',
      streetName: 'John St',
      city: 'Brooklyn',
      state: 'NY',
      postalCode: '11201',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'free-weights', 'sauna'),
  },

  // Queens
  {
    name: 'Movement LIC',
    description: 'Formerly The Cliffs at LIC.',
    parent: movement,
    address: {
      streetNumber: '11-11',
      streetName: '44th Dr',
      city: 'Long Island City',
      state: 'NY',
      postalCode: '11101',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
  },
  {
    name: 'Brooklyn Boulders Queensbridge',
    description: 'Despite the name, this one is in Queens.',
    parent: brooklynBoulders,
    address: {
      streetNumber: '23-10',
      streetName: '41st Ave',
      city: 'Long Island City',
      state: 'NY',
      postalCode: '11101',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'free-weights', 'yoga', 'sauna'),
  },

  // Manhattan
  {
    name: 'Vital Lower East Side',
    parent: vital,
    address: {
      streetNumber: '182',
      streetName: 'Broome St',
      city: 'New York',
      state: 'NY',
      postalCode: '10002',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'yoga'),
  },
  {
    name: 'Central Rock Gym Chelsea',
    parent: centralRockGym,
    address: {
      streetNumber: '537',
      streetName: 'W 27th St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'yoga'),
  },
  {
    name: 'Central Rock Gym Manhattan',
    parent: centralRockGym,
    address: {
      streetNumber: '21',
      streetName: 'West End Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10069',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'top-rope'),
  },
  {
    name: 'Vital Upper East Side',
    parent: vital,
    address: {
      streetNumber: '1506',
      streetName: 'Lexington Ave',
      city: 'New York',
      state: 'NY',
      postalCode: '10029',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'free-weights'),
  },
  {
    name: 'Movement Harlem',
    description: 'Formerly The Cliffs at Harlem.',
    parent: movement,
    address: {
      streetNumber: '256',
      streetName: 'W 125th St',
      city: 'New York',
      state: 'NY',
      postalCode: '10027',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'free-weights', 'yoga'),
  },
  {
    name: 'Vital West Harlem',
    parent: vital,
    address: {
      streetNumber: '3225',
      streetName: 'Broadway',
      city: 'New York',
      state: 'NY',
      postalCode: '10027',
      country: 'USA',
    },
    amenities: amenities('bouldering', 'free-weights', 'yoga'),
  },
];
