import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { leCrux } from "../companies/leCrux";

export const leCruxBoisbriand: ClimbingGym = {
  name: 'Le Crux Boisbriand',
  description: 'Climbing and Ninja Warrior, with a training area.',
  parent: leCrux,
  address: {
    streetNumber: '95A',
    streetName: 'Boul des Entreprises',
    city: 'Boisbriand',
    region: 'QC',
    postalCode: 'J7G 2T1',
    country: 'CA',
    latitude: 45.611,
    longitude: -73.843,
  },
  amenities: amenities('bouldering', 'lead'),
};
