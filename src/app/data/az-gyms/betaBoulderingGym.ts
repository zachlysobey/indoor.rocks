import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const betaBoulderingGym: ClimbingGym = {
  name: 'Beta Bouldering Gym',
  website: 'https://www.betaboulderinggym.com/',
  description: 'Bouldering gym with LED training boards and a fitness area.',
  address: {
    streetNumber: '495',
    streetName: 'S River Run Rd',
    city: 'Flagstaff',
    region: 'AZ',
    postalCode: '86001',
    country: 'US',
    latitude: 35.190,
    longitude: -111.622,
  },
  amenities: amenities('bouldering', 'machines', 'free-weights'),
};
