import type { ClimbingGym } from "@/app/dataModel";
import { missionCliffs } from "./missionCliffs";
import { dogpatchBoulders } from "./dogpatchBoulders";
import { berkeleyIronworks } from "./berkeleyIronworks";
import { theOaks } from "./theOaks";
import { greatWesternPowerCo } from "./greatWesternPowerCo";
import { pacificPipe } from "./pacificPipe";
import { diabloRockGym } from "./diabloRockGym";
import { hyperion } from "./hyperion";
import { theStudio } from "./theStudio";
import { sacramentoPipeworks } from "./sacramentoPipeworks";
import { metalmark } from "./metalmark";
import { movementSanFrancisco } from "./movementSanFrancisco";
import { movementBelmont } from "./movementBelmont";
import { movementMountainView } from "./movementMountainView";
import { movementSantaClara } from "./movementSantaClara";
import { movementSunnyvale } from "./movementSunnyvale";
import { benchmarkClimbingSanFrancisco } from "./benchmarkClimbingSanFrancisco";
import { benchmarkClimbingBerkeley } from "./benchmarkClimbingBerkeley";
import { mosaicBoulders } from "./mosaicBoulders";
import { bridgesRockGym } from "./bridgesRockGym";
import { californiaClimbingCollective } from "./californiaClimbingCollective";
import { gravityVaultMarin } from "./gravityVaultMarin";
import { sessionClimbing } from "./sessionClimbing";
import { vertexClimbingCenter } from "./vertexClimbingCenter";
import { rockzilla } from "./rockzilla";
import { thePeakOfFremont } from "./thePeakOfFremont";
import { agilityBoulders } from "./agilityBoulders";
import { pacificEdgeClimbingGym } from "./pacificEdgeClimbingGym";
import { sanctuaryClimbingFitness } from "./sanctuaryClimbingFitness";
import { rocknasium } from "./rocknasium";
import { graniteArchClimbingCenter } from "./graniteArchClimbingCenter";
import { theBoulderField } from "./theBoulderField";
import { terrainParkClimbingCenter } from "./terrainParkClimbingCenter";
import { shastaRockClub } from "./shastaRockClub";
import { farNorthClimbingGym } from "./farNorthClimbingGym";
import { goldCrushClimbingGym } from "./goldCrushClimbingGym";
import { blueGraniteClimbingGym } from "./blueGraniteClimbingGym";
import { highAltitudeFitnessTruckee } from "./highAltitudeFitnessTruckee";
import { alpineClimbingAdventureFitness } from "./alpineClimbingAdventureFitness";
import { cliffsOfId } from "./cliffsOfId";
import { class5 } from "./class5";
import { hollywoodBoulders } from "./hollywoodBoulders";
import { laBoulders } from "./laBoulders";
import { thePost } from "./thePost";
import { verdigoBoulders } from "./verdigoBoulders";
import { theStrongholdLincolnHeights } from "./theStrongholdLincolnHeights";
import { theStrongholdEchoPark } from "./theStrongholdEchoPark";
import { senderOneLax } from "./senderOneLax";
import { senderOneWestwood } from "./senderOneWestwood";
import { senderOnePlayaVista } from "./senderOnePlayaVista";
import { senderOneLakewood } from "./senderOneLakewood";
import { senderOneSna } from "./senderOneSna";
import { senderOneAlisoViejo } from "./senderOneAlisoViejo";
import { hangar18Arcadia } from "./hangar18Arcadia";
import { hangar18EastRiverside } from "./hangar18EastRiverside";
import { hangar18HighDesert } from "./hangar18HighDesert";
import { hangar18LongBeach } from "./hangar18LongBeach";
import { hangar18MissionViejo } from "./hangar18MissionViejo";
import { hangar18Orange } from "./hangar18Orange";
import { hangar18RanchoCucamonga } from "./hangar18RanchoCucamonga";
import { hangar18Riverside } from "./hangar18Riverside";
import { hangar18SanClemente } from "./hangar18SanClemente";
import { hangar18SouthBay } from "./hangar18SouthBay";
import { hangar18Upland } from "./hangar18Upland";
import { mesaRimMiraMesa } from "./mesaRimMiraMesa";
import { mesaRimMissionValley } from "./mesaRimMissionValley";
import { mesaRimNorthCity } from "./mesaRimNorthCity";
import { vitalOceanside } from "./vitalOceanside";
import { vitalCarlsbad } from "./vitalCarlsbad";
import { vitalMurrieta } from "./vitalMurrieta";
import { verticalHoldSanDiego } from "./verticalHoldSanDiego";
import { verticalHoldPoway } from "./verticalHoldPoway";
import { verticalHoldSanMarcos } from "./verticalHoldSanMarcos";
import { grottoClimbingYogaMissionValley } from "./grottoClimbingYogaMissionValley";
import { grottoClimbingYogaMiramar } from "./grottoClimbingYogaMiramar";
import { theWallClimbingGym } from "./theWallClimbingGym";
import { rockFitness } from "./rockFitness";
import { movementFountainValley } from "./movementFountainValley";
import { rockreationCostaMesa } from "./rockreationCostaMesa";
import { rockreationLosAngeles } from "./rockreationLosAngeles";
import { rockCityClimbing } from "./rockCityClimbing";
import { aestheticClimbingGym } from "./aestheticClimbingGym";
import { longBeachRising } from "./longBeachRising";
import { topOutClimbing } from "./topOutClimbing";
import { boulderdashSanFernandoValley } from "./boulderdashSanFernandoValley";
import { boulderdashThousandOaks } from "./boulderdashThousandOaks";
import { boulderdashVentura } from "./boulderdashVentura";
import { flowstoneClimbing } from "./flowstoneClimbing";
import { vertRockGym } from "./vertRockGym";
import { thePadSanLuisObispo } from "./thePadSanLuisObispo";
import { thePadSantaBarbara } from "./thePadSantaBarbara";

export const caGyms: ClimbingGym[] = [
  missionCliffs,
  dogpatchBoulders,
  berkeleyIronworks,
  theOaks,
  greatWesternPowerCo,
  pacificPipe,
  diabloRockGym,
  hyperion,
  theStudio,
  sacramentoPipeworks,
  metalmark,
  movementSanFrancisco,
  movementBelmont,
  movementMountainView,
  movementSantaClara,
  movementSunnyvale,
  benchmarkClimbingSanFrancisco,
  benchmarkClimbingBerkeley,
  mosaicBoulders,
  bridgesRockGym,
  californiaClimbingCollective,
  gravityVaultMarin,
  sessionClimbing,
  vertexClimbingCenter,
  rockzilla,
  thePeakOfFremont,
  agilityBoulders,
  pacificEdgeClimbingGym,
  sanctuaryClimbingFitness,
  rocknasium,
  graniteArchClimbingCenter,
  theBoulderField,
  terrainParkClimbingCenter,
  shastaRockClub,
  farNorthClimbingGym,
  goldCrushClimbingGym,
  blueGraniteClimbingGym,
  highAltitudeFitnessTruckee,
  alpineClimbingAdventureFitness,
  cliffsOfId,
  class5,
  hollywoodBoulders,
  laBoulders,
  thePost,
  verdigoBoulders,
  theStrongholdLincolnHeights,
  theStrongholdEchoPark,
  senderOneLax,
  senderOneWestwood,
  senderOnePlayaVista,
  senderOneLakewood,
  senderOneSna,
  senderOneAlisoViejo,
  hangar18Arcadia,
  hangar18EastRiverside,
  hangar18HighDesert,
  hangar18LongBeach,
  hangar18MissionViejo,
  hangar18Orange,
  hangar18RanchoCucamonga,
  hangar18Riverside,
  hangar18SanClemente,
  hangar18SouthBay,
  hangar18Upland,
  mesaRimMiraMesa,
  mesaRimMissionValley,
  mesaRimNorthCity,
  vitalOceanside,
  vitalCarlsbad,
  vitalMurrieta,
  verticalHoldSanDiego,
  verticalHoldPoway,
  verticalHoldSanMarcos,
  grottoClimbingYogaMissionValley,
  grottoClimbingYogaMiramar,
  theWallClimbingGym,
  rockFitness,
  movementFountainValley,
  rockreationCostaMesa,
  rockreationLosAngeles,
  rockCityClimbing,
  aestheticClimbingGym,
  longBeachRising,
  topOutClimbing,
  boulderdashSanFernandoValley,
  boulderdashThousandOaks,
  boulderdashVentura,
  flowstoneClimbing,
  vertRockGym,
  thePadSanLuisObispo,
  thePadSantaBarbara,
];
