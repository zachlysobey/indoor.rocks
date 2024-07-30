import { ClimbingGym, DataModel } from "./dataModel";
import { vitalBrooklyn } from './data/nyc-gyms/vitalBrooklyn';
import { brooklynBoulders } from "./data/nyc-gyms/brooklynBoulders";
import { theCliffsLic } from "./data/nyc-gyms/theCliffLic";
import { metroRockBrooklyn } from "./data/nyc-gyms/metroRockBrooklyn";
import { rockClimbFairfield } from "./data/ct-gyms/ct-gyms";

export function getData (): DataModel {
  const data: DataModel = {
    climbingGyms: Object.values(climbingGymDictionary),
  }
  return data
};

const climbingGymDictionary: Record<string, ClimbingGym> = {
  vitalBrooklyn,
  brooklynBoulders,
  theCliffsLic,
  metroRockBrooklyn,
  rockClimbFairfield,
};

