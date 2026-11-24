import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blueGraniteClimbingGym: ClimbingGym = {
  name: 'Blue Granite Climbing Gym',
  website: 'https://bluegraniteclimbing.com',
  address: {
    streetNumber: '1259',
    streetName: 'Emerald Bay Rd',
    city: 'South Lake Tahoe',
    region: 'CA',
    postalCode: '96150',
    country: 'US',
    latitude: 38.918,
    longitude: -120.003,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
