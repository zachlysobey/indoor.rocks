import type { DataModel } from "./dataModel";
import { nycGyms } from "./data/gyms/nyc";
import { nySuburbsGyms } from "./data/gyms/ny-suburbs";
import { njGyms } from "./data/gyms/nj";
import { ctGyms } from "./data/gyms/ct";

export function getData (): DataModel {
  return {
    climbingGyms: [...nycGyms, ...nySuburbsGyms, ...njGyms, ...ctGyms],
  };
};
