import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const greatWesternPowerCo: ClimbingGym = {
  name: 'Great Western Power Co.',
  website: 'https://touchstoneclimbing.com/gwpower-co/',
  parent: touchstone,
  address: {
    streetNumber: '520',
    streetName: '20th St',
    city: 'Oakland',
    state: 'CA',
    postalCode: '94612',
    country: 'USA',
    latitude: 37.809,
    longitude: -122.269,
  },
  amenities: amenities('bouldering', 'lead', 'free-weights', 'machines', 'yoga'),
};
