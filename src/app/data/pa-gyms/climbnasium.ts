import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbnasium: ClimbingGym = {
  name: 'Climbnasium',
  website: 'https://www.climbnasium.net/',
  address: {
    streetNumber: '339',
    streetName: 'N Locust Point Rd',
    city: 'Mechanicsburg',
    state: 'PA',
    postalCode: '17050',
    country: 'USA',
    latitude: 40.240,
    longitude: -77.070,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
