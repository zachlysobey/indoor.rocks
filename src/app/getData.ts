import { ClimbingGym, DataModel, GymAmenity } from "./dataModel";

export function getData (): DataModel {
  const data: DataModel = {
    climbingGyms: Object.values(climbingGymDictionary),
  }
  return data
};

const amenityMap: Record<GymAmenity['name'], GymAmenity> = {
  'free-weights': { name: 'free-weights' },
  'machines': { name: 'machines' },
  'bouldering': { name: 'bouldering' },
  'auto-belays': { name: 'auto-belays' },
  'top-rope': { name: 'top-rope' },
  'sauna': { name: 'sauna' },
  'yoga': { name: 'yoga' },
  'arial-silks': { name: 'arial-silks' }
}

const climbingGymDictionary: Record<string, ClimbingGym> = {
  vitalBrooklyn: {
    name: 'Vital Brooklyn',
    address: {
      state: 'NY',
      streetNumber: '221',
      streetName: 'N 14th St',
      city: 'Brooklyn',
      postalCode: '11249',
      country: 'USA'
    },
    amenities: [
      amenityMap['bouldering'],
      amenityMap['machines'],
      amenityMap['free-weights'],
      amenityMap['yoga'],
      amenityMap['sauna'],
    ]
  },
  brooklynBoulders: {
    name: 'Brooklyn Boulders',
    address: {
      state: 'NY',
      streetNumber: '575',
      streetName: 'Degraw St',
      city: 'Brooklyn',
      postalCode: '11217',
      country: 'USA'
    },
    amenities: [
      amenityMap['bouldering'],
      amenityMap['top-rope'],
      amenityMap['machines'],
      amenityMap['free-weights'],
      amenityMap['yoga'],
      amenityMap['sauna'],
    ]
  },
  theCliffsLIC: {
    name: 'The Cliffs at LIC',
    address: {
      state: 'NY',
      streetNumber: '11-11',
      streetName: '44th Dr',
      city: 'Long Island City',
      postalCode: '11101',
      country: 'USA'
    },
    amenities: [
      amenityMap['bouldering'],
      amenityMap['top-rope'],
      amenityMap['auto-belays'],
      amenityMap['machines'],
      amenityMap['free-weights'],
      amenityMap['yoga'],
    ]
  },
  metroRockBrooklyn: {
    name: 'MetroRock Brooklyn',
    address: {
      state: 'NY',
      streetNumber: '321',
      streetName: 'Douglass St',
      city: 'Brooklyn',
      postalCode: '11217',
      country: 'USA'
    },
    amenities: [
      amenityMap['bouldering'],
      amenityMap['top-rope'],
      amenityMap['auto-belays'],
      amenityMap['machines'],
      amenityMap['free-weights'],
    ]
  },
  rockClimbFairfield: {
    name: 'Rock Climb Fairfield',
    address: {
      state: 'CT',
      streetNumber: '85',
      streetName: 'Mill Plain Rd',
      city: 'Fairfield',
      postalCode: '06824',
      country: 'USA'
    },
    amenities: [
      { name: 'bouldering', description: 'Indoor bouldering walls for all skill levels' },
      { name: 'top-rope', description: 'Top-rope climbing routes with auto-belays' },
      { name: 'auto-belays', description: 'Auto-belay systems for solo climbers' },
      { name: 'machines', description: 'A variety of exercise machines' },
      { name: 'free-weights', description: 'Various free weights available' },
      { name: 'yoga', description: 'Yoga classes and sessions' }
    ]
  }
};

