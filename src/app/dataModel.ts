export type TopLevelEntity = {
  name: string;
}

export type Address = {
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
}

export type Place = TopLevelEntity & {
  name: string;
  description?: string;
  website?: string;
  address: Address;
};

export type Gym = Place & {
  name: string;
  amenities: GymAmenity[];
};

export type GymAmenity = {
  name:
    |'free-weights'
    |'machines'
    |'bouldering'
    |'auto-belays'
    |'top-rope'
    |'lead'
    |'sauna'
    |'yoga'
    |'arial-silks'
  description?:  string
};

export type ClimbingGym = Gym & {
  parent?: Company;
}

export type Company = TopLevelEntity & {
  name: string;
  // The chain's own home, covering all its gyms. Set only when a source shows it, as for a gym.
  website?: string;
};

export type DataModel = {
  climbingGyms: ClimbingGym[];
};

