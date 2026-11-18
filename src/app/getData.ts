import type { ClimbingGym, DataModel } from "./dataModel";
import { boulderingProjectGowanus } from "./data/nyc-gyms/boulderingProjectGowanus";
import { movementGowanus } from "./data/nyc-gyms/movementGowanus";
import { vitalBrooklyn } from "./data/nyc-gyms/vitalBrooklyn";
import { metroRockBushwick } from "./data/nyc-gyms/metroRockBushwick";
import { gp81 } from "./data/nyc-gyms/gp81";
import { brooklynUprising } from "./data/nyc-gyms/brooklynUprising";
import { movementLic } from "./data/nyc-gyms/movementLic";
import { brooklynBouldersQueensbridge } from "./data/nyc-gyms/brooklynBouldersQueensbridge";
import { vitalLowerEastSide } from "./data/nyc-gyms/vitalLowerEastSide";
import { centralRockGymChelsea } from "./data/nyc-gyms/centralRockGymChelsea";
import { centralRockGymManhattan } from "./data/nyc-gyms/centralRockGymManhattan";
import { vitalUpperEastSide } from "./data/nyc-gyms/vitalUpperEastSide";
import { movementHarlem } from "./data/nyc-gyms/movementHarlem";
import { vitalWestHarlem } from "./data/nyc-gyms/vitalWestHarlem";
import { movementValhalla } from "./data/ny-suburbs-gyms/movementValhalla";
import { theRockClub } from "./data/ny-suburbs-gyms/theRockClub";
import { rocksteadyClimbingGym } from "./data/ny-suburbs-gyms/rocksteadyClimbingGym";
import { islandRock } from "./data/ny-suburbs-gyms/islandRock";
import { theGravityVaultWestbury } from "./data/ny-suburbs-gyms/theGravityVaultWestbury";
import { theGravityVaultMelville } from "./data/ny-suburbs-gyms/theGravityVaultMelville";
import { theGravityVaultHoboken } from "./data/nj-gyms/theGravityVaultHoboken";
import { goatClimbingGym } from "./data/nj-gyms/goatClimbingGym";
import { methodClimbing } from "./data/nj-gyms/methodClimbing";
import { theGravityVaultMontclair } from "./data/nj-gyms/theGravityVaultMontclair";
import { theGravityVaultUpperSaddleRiver } from "./data/nj-gyms/theGravityVaultUpperSaddleRiver";
import { theGravityVaultChatham } from "./data/nj-gyms/theGravityVaultChatham";
import { newJerseyRockGym } from "./data/nj-gyms/newJerseyRockGym";
import { gardenStateRocks } from "./data/nj-gyms/gardenStateRocks";
import { theGravityVaultBrick } from "./data/nj-gyms/theGravityVaultBrick";
import { theGravityVaultFlemington } from "./data/nj-gyms/theGravityVaultFlemington";
import { theGravityVaultMiddletown } from "./data/nj-gyms/theGravityVaultMiddletown";
import { theGravityVaultPrinceton } from "./data/nj-gyms/theGravityVaultPrinceton";
import { theGravityVaultVoorhees } from "./data/nj-gyms/theGravityVaultVoorhees";
import { rockvilleClimbingCenter } from "./data/nj-gyms/rockvilleClimbingCenter";
import { kineticClimbing } from "./data/nj-gyms/kineticClimbing";
import { rockClimbFairfield } from "./data/ct-gyms/rockClimbFairfield";
import { cityClimbGym } from "./data/ct-gyms/cityClimbGym";
import { rockSpotClimbingWallingford } from "./data/ct-gyms/rockSpotClimbingWallingford";
import { centralRockGymWestHartford } from "./data/ct-gyms/centralRockGymWestHartford";
import { centralRockGymGlastonbury } from "./data/ct-gyms/centralRockGymGlastonbury";
import { stoneAgeRockGym } from "./data/ct-gyms/stoneAgeRockGym";
import { rockSpotClimbingNewHaven } from "./data/ct-gyms/rockSpotClimbingNewHaven";
import { ascentNewHaven } from "./data/ct-gyms/ascentNewHaven";

export function getData (): DataModel {
  return {
    climbingGyms: Object.values(climbingGymDictionary),
  };
};

const climbingGymDictionary: Record<string, ClimbingGym> = {
  boulderingProjectGowanus,
  movementGowanus,
  vitalBrooklyn,
  metroRockBushwick,
  gp81,
  brooklynUprising,
  movementLic,
  brooklynBouldersQueensbridge,
  vitalLowerEastSide,
  centralRockGymChelsea,
  centralRockGymManhattan,
  vitalUpperEastSide,
  movementHarlem,
  vitalWestHarlem,
  movementValhalla,
  theRockClub,
  rocksteadyClimbingGym,
  islandRock,
  theGravityVaultWestbury,
  theGravityVaultMelville,
  theGravityVaultHoboken,
  goatClimbingGym,
  methodClimbing,
  theGravityVaultMontclair,
  theGravityVaultUpperSaddleRiver,
  theGravityVaultChatham,
  newJerseyRockGym,
  gardenStateRocks,
  theGravityVaultBrick,
  theGravityVaultFlemington,
  theGravityVaultMiddletown,
  theGravityVaultPrinceton,
  theGravityVaultVoorhees,
  rockvilleClimbingCenter,
  kineticClimbing,
  rockClimbFairfield,
  cityClimbGym,
  rockSpotClimbingWallingford,
  centralRockGymWestHartford,
  centralRockGymGlastonbury,
  stoneAgeRockGym,
  rockSpotClimbingNewHaven,
  ascentNewHaven,
};
