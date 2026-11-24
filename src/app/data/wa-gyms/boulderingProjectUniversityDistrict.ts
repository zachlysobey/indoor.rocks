import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectUniversityDistrict: ClimbingGym = {
  name: 'Bouldering Project University District',
  website: 'https://boulderingproject.com/location/university-district/',
  description: 'Bouldering on two floors, with a sauna in a former bank vault and a cold plunge.',
  parent: boulderingProject,
  address: {
    streetNumber: '4502',
    streetName: 'University Way NE',
    city: 'Seattle',
    region: 'WA',
    postalCode: '98105',
    country: 'US',
    latitude: 47.661,
    longitude: -122.313,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines', 'sauna'),
};
