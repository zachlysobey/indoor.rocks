import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { saltPump } from "../companies/saltPump";

export const saltPumpPortsmouth: ClimbingGym = {
  name: 'Salt Pump Portsmouth',
  website: 'https://www.saltpumpclimbing.com/portsmouth-new-hampshire/',
  description: 'Bouldering only.',
  parent: saltPump,
  address: {
    streetNumber: '199',
    streetName: 'Constitution Ave',
    city: 'Portsmouth',
    state: 'NH',
    postalCode: '03801',
    country: 'USA',
    latitude: 43.047,
    longitude: -70.785,
  },
  amenities: amenities('bouldering', 'yoga'),
};
