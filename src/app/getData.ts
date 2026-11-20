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
import { albanysIndoorRockgym } from "./data/ny-upstate-gyms/albanysIndoorRockgym";
import { hudsonBoulders } from "./data/ny-upstate-gyms/hudsonBoulders";
import { theEdgeHalfmoon } from "./data/ny-upstate-gyms/theEdgeHalfmoon";
import { centralRockGymTroy } from "./data/ny-upstate-gyms/centralRockGymTroy";
import { rocksport } from "./data/ny-upstate-gyms/rocksport";
import { hiNotchIndoorClimbing } from "./data/ny-upstate-gyms/hiNotchIndoorClimbing";
import { theCrux } from "./data/ny-upstate-gyms/theCrux";
import { theGravityVaultPoughkeepsie } from "./data/ny-upstate-gyms/theGravityVaultPoughkeepsie";
import { mustangsBouldering } from "./data/ny-upstate-gyms/mustangsBouldering";
import { bcsNewPaltzClimbingGym } from "./data/ny-upstate-gyms/bcsNewPaltzClimbingGym";
import { centralRockGymSyracuse } from "./data/ny-upstate-gyms/centralRockGymSyracuse";
import { tableRockBouldering } from "./data/ny-upstate-gyms/tableRockBouldering";
import { cayugaClimbs } from "./data/ny-upstate-gyms/cayugaClimbs";
import { thePadClimbingBinghamton } from "./data/ny-upstate-gyms/thePadClimbingBinghamton";
import { centralRockGymRochester } from "./data/ny-upstate-gyms/centralRockGymRochester";
import { rocVenturesClimbingGym } from "./data/ny-upstate-gyms/rocVenturesClimbingGym";
import { sunriseBouldering } from "./data/ny-upstate-gyms/sunriseBouldering";
import { centralRockGymBuffalo } from "./data/ny-upstate-gyms/centralRockGymBuffalo";
import { niagaraClimbingCenter } from "./data/ny-upstate-gyms/niagaraClimbingCenter";
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
import { boulderUnion } from "./data/ma-gyms/boulderUnion";
import { petraCliffs } from "./data/vt-gyms/petraCliffs";
import { metroRockVermont } from "./data/vt-gyms/metroRockVermont";
import { greenMountainRockClimbingCenter } from "./data/vt-gyms/greenMountainRockClimbingCenter";
import { brattCaveBoulderingGym } from "./data/vt-gyms/brattCaveBoulderingGym";
import { climbStratton } from "./data/vt-gyms/climbStratton";
import { rockSpotClimbingLincoln } from "./data/ri-gyms/rockSpotClimbingLincoln";
import { rockSpotClimbingPeaceDale } from "./data/ri-gyms/rockSpotClimbingPeaceDale";
import { rockSpotClimbingProvidence } from "./data/ri-gyms/rockSpotClimbingProvidence";
import { centralRockGymWarwick } from "./data/ri-gyms/centralRockGymWarwick";
import { nhClimbingAndFitness } from "./data/nh-gyms/nhClimbingAndFitness";
import { verticalDreams } from "./data/nh-gyms/verticalDreams";
import { indoorAscent } from "./data/nh-gyms/indoorAscent";
import { theNotchClimbingGym } from "./data/nh-gyms/theNotchClimbingGym";
import { northCountryClimbingCenter } from "./data/nh-gyms/northCountryClimbingCenter";
import { saltPumpPortsmouth } from "./data/nh-gyms/saltPumpPortsmouth";
import { seacoastClimb } from "./data/nh-gyms/seacoastClimb";
import { climbMonadnock } from "./data/nh-gyms/climbMonadnock";
import { saltPumpScarborough } from "./data/me-gyms/saltPumpScarborough";
import { evoRockAndFitnessPortland } from "./data/me-gyms/evoRockAndFitnessPortland";
import { voltaClimbing } from "./data/me-gyms/voltaClimbing";
import { movementCallowhill } from "./data/pa-gyms/movementCallowhill";
import { movementFishtown } from "./data/pa-gyms/movementFishtown";
import { philadelphiaRockGymsFishtown } from "./data/pa-gyms/philadelphiaRockGymsFishtown";
import { philadelphiaRockGymsEastFalls } from "./data/pa-gyms/philadelphiaRockGymsEastFalls";
import { philadelphiaRockGymsOaks } from "./data/pa-gyms/philadelphiaRockGymsOaks";
import { philadelphiaRockGymsWyncote } from "./data/pa-gyms/philadelphiaRockGymsWyncote";
import { philadelphiaRockGymsMalvern } from "./data/pa-gyms/philadelphiaRockGymsMalvern";
import { tufasBoulderLounge } from "./data/pa-gyms/tufasBoulderLounge";
import { reachClimbingAndFitness } from "./data/pa-gyms/reachClimbingAndFitness";
import { theGravityVaultRadnor } from "./data/pa-gyms/theGravityVaultRadnor";
import { theGravityVaultLehighValley } from "./data/pa-gyms/theGravityVaultLehighValley";
import { downingtownRockGym } from "./data/pa-gyms/downingtownRockGym";
import { doylestownRockGym } from "./data/pa-gyms/doylestownRockGym";
import { northSummitClimbingGym } from "./data/pa-gyms/northSummitClimbingGym";
import { chakstoneIndoorClimbing } from "./data/pa-gyms/chakstoneIndoorClimbing";
import { readingRocks } from "./data/pa-gyms/readingRocks";
import { nookClimbingGym } from "./data/pa-gyms/nookClimbingGym";
import { climbnasium } from "./data/pa-gyms/climbnasium";
import { climbNittany } from "./data/pa-gyms/climbNittany";
import { miltonRockGym } from "./data/pa-gyms/miltonRockGym";
import { ascendSouthSide } from "./data/pa-gyms/ascendSouthSide";
import { ascendPointBreeze } from "./data/pa-gyms/ascendPointBreeze";
import { ascendErie } from "./data/pa-gyms/ascendErie";
import { ironCityBoulders } from "./data/pa-gyms/ironCityBoulders";
import { faClimbingStationSquare } from "./data/pa-gyms/faClimbingStationSquare";
import { climbNorth } from "./data/pa-gyms/climbNorth";
import { theGoatFort } from "./data/pa-gyms/theGoatFort";
import { movementHampden } from "./data/md-gyms/movementHampden";
import { movementColumbia } from "./data/md-gyms/movementColumbia";
import { movementRockville } from "./data/md-gyms/movementRockville";
import { movementTimonium } from "./data/md-gyms/movementTimonium";
import { sportrockRio } from "./data/md-gyms/sportrockRio";
import { theBoulderYard } from "./data/md-gyms/theBoulderYard";
import { delawareRockGym } from "./data/de-gyms/delawareRockGym";

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
  albanysIndoorRockgym,
  hudsonBoulders,
  theEdgeHalfmoon,
  centralRockGymTroy,
  rocksport,
  hiNotchIndoorClimbing,
  theCrux,
  theGravityVaultPoughkeepsie,
  mustangsBouldering,
  bcsNewPaltzClimbingGym,
  centralRockGymSyracuse,
  tableRockBouldering,
  cayugaClimbs,
  thePadClimbingBinghamton,
  centralRockGymRochester,
  rocVenturesClimbingGym,
  sunriseBouldering,
  centralRockGymBuffalo,
  niagaraClimbingCenter,
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
  boulderUnion,
  petraCliffs,
  metroRockVermont,
  greenMountainRockClimbingCenter,
  brattCaveBoulderingGym,
  climbStratton,
  rockSpotClimbingLincoln,
  rockSpotClimbingPeaceDale,
  rockSpotClimbingProvidence,
  centralRockGymWarwick,
  nhClimbingAndFitness,
  verticalDreams,
  indoorAscent,
  theNotchClimbingGym,
  northCountryClimbingCenter,
  saltPumpPortsmouth,
  seacoastClimb,
  climbMonadnock,
  saltPumpScarborough,
  evoRockAndFitnessPortland,
  voltaClimbing,
  movementCallowhill,
  movementFishtown,
  philadelphiaRockGymsFishtown,
  philadelphiaRockGymsEastFalls,
  philadelphiaRockGymsOaks,
  philadelphiaRockGymsWyncote,
  philadelphiaRockGymsMalvern,
  tufasBoulderLounge,
  reachClimbingAndFitness,
  theGravityVaultRadnor,
  theGravityVaultLehighValley,
  downingtownRockGym,
  doylestownRockGym,
  northSummitClimbingGym,
  chakstoneIndoorClimbing,
  readingRocks,
  nookClimbingGym,
  climbnasium,
  climbNittany,
  miltonRockGym,
  ascendSouthSide,
  ascendPointBreeze,
  ascendErie,
  ironCityBoulders,
  faClimbingStationSquare,
  climbNorth,
  theGoatFort,
  movementHampden,
  movementColumbia,
  movementRockville,
  movementTimonium,
  sportrockRio,
  theBoulderYard,
  delawareRockGym,
};
