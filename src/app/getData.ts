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
import { centralRockGymHadley } from "./data/ma-gyms/centralRockGymHadley";
import { centralRockGymNorthStation } from "./data/ma-gyms/centralRockGymNorthStation";
import { centralRockGymCambridge } from "./data/ma-gyms/centralRockGymCambridge";
import { centralRockGymFenway } from "./data/ma-gyms/centralRockGymFenway";
import { centralRockGymFramingham } from "./data/ma-gyms/centralRockGymFramingham";
import { centralRockGymHarvardSquare } from "./data/ma-gyms/centralRockGymHarvardSquare";
import { centralRockGymRandolph } from "./data/ma-gyms/centralRockGymRandolph";
import { centralRockGymStoneham } from "./data/ma-gyms/centralRockGymStoneham";
import { centralRockGymWaltham } from "./data/ma-gyms/centralRockGymWaltham";
import { centralRockGymWatertown } from "./data/ma-gyms/centralRockGymWatertown";
import { centralRockGymArsenalYards } from "./data/ma-gyms/centralRockGymArsenalYards";
import { centralRockGymWorcester } from "./data/ma-gyms/centralRockGymWorcester";
import { metroRockEverett } from "./data/ma-gyms/metroRockEverett";
import { metroRockTyngsboro } from "./data/ma-gyms/metroRockTyngsboro";
import { metroRockLittleton } from "./data/ma-gyms/metroRockLittleton";
import { rockSpotClimbingBoston } from "./data/ma-gyms/rockSpotClimbingBoston";
import { rockSpotClimbingSouthBoston } from "./data/ma-gyms/rockSpotClimbingSouthBoston";
import { rockSpotClimbingBrookline } from "./data/ma-gyms/rockSpotClimbingBrookline";
import { rockSpotClimbingMalden } from "./data/ma-gyms/rockSpotClimbingMalden";
import { boulderingProjectSomerville } from "./data/ma-gyms/boulderingProjectSomerville";
import { carabinersClimbingAndFitness } from "./data/ma-gyms/carabinersClimbingAndFitness";
import { berkshireBoulders } from "./data/ma-gyms/berkshireBoulders";
import { petraCliffs } from "./data/vt-gyms/petraCliffs";
import { metroRockVermont } from "./data/vt-gyms/metroRockVermont";
import { greenMountainRockClimbingCenter } from "./data/vt-gyms/greenMountainRockClimbingCenter";
import { brattCaveBoulderingGym } from "./data/vt-gyms/brattCaveBoulderingGym";
import { climbStratton } from "./data/vt-gyms/climbStratton";

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
  centralRockGymHadley,
  centralRockGymNorthStation,
  centralRockGymCambridge,
  centralRockGymFenway,
  centralRockGymFramingham,
  centralRockGymHarvardSquare,
  centralRockGymRandolph,
  centralRockGymStoneham,
  centralRockGymWaltham,
  centralRockGymWatertown,
  centralRockGymArsenalYards,
  centralRockGymWorcester,
  metroRockEverett,
  metroRockTyngsboro,
  metroRockLittleton,
  rockSpotClimbingBoston,
  rockSpotClimbingSouthBoston,
  rockSpotClimbingBrookline,
  rockSpotClimbingMalden,
  boulderingProjectSomerville,
  carabinersClimbingAndFitness,
  berkshireBoulders,
  petraCliffs,
  metroRockVermont,
  greenMountainRockClimbingCenter,
  brattCaveBoulderingGym,
  climbStratton,
};
