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
  latitude?: number;
  longitude?: number;
}

export type Place = TopLevelEntity & {
  name: string;
  description?: string;
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
};

export type DataModel = {
  climbingGyms: ClimbingGym[];
};

