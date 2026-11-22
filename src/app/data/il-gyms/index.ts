import type { ClimbingGym } from "@/app/dataModel";
import { firstAscentAvondale } from "./firstAscentAvondale";
import { firstAscentBlock37 } from "./firstAscentBlock37";
import { firstAscentHumboldtPark } from "./firstAscentHumboldtPark";
import { firstAscentUptown } from "./firstAscentUptown";
import { firstAscentWestLoop } from "./firstAscentWestLoop";
import { firstAscentArlingtonHeights } from "./firstAscentArlingtonHeights";
import { firstAscentPeoria } from "./firstAscentPeoria";
import { movementLincolnPark } from "./movementLincolnPark";
import { movementWrigleyville } from "./movementWrigleyville";
import { verticalEndeavorsGlendaleHeights } from "./verticalEndeavorsGlendaleHeights";
import { upperLimitsBloomington } from "./upperLimitsBloomington";
import { theProvingGroundBoulderingGym } from "./theProvingGroundBoulderingGym";
import { horizonClimbing } from "./horizonClimbing";
import { urbanaBouldersGym } from "./urbanaBouldersGym";
import { boneyardBoulders } from "./boneyardBoulders";
import { northWallRockClimbingGym } from "./northWallRockClimbingGym";
import { climbOn } from "./climbOn";

export const ilGyms: ClimbingGym[] = [
  firstAscentAvondale,
  firstAscentBlock37,
  firstAscentHumboldtPark,
  firstAscentUptown,
  firstAscentWestLoop,
  firstAscentArlingtonHeights,
  firstAscentPeoria,
  movementLincolnPark,
  movementWrigleyville,
  verticalEndeavorsGlendaleHeights,
  upperLimitsBloomington,
  theProvingGroundBoulderingGym,
  horizonClimbing,
  urbanaBouldersGym,
  boneyardBoulders,
  northWallRockClimbingGym,
  climbOn,
];
