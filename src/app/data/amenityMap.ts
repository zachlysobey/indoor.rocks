import { ClimbingGym, DataModel, GymAmenity } from "../dataModel";

export const amenityMap: Record<GymAmenity['name'], GymAmenity> = {
  'free-weights': { name: 'free-weights' },
  'machines': { name: 'machines' },
  'bouldering': { name: 'bouldering' },
  'auto-belays': { name: 'auto-belays' },
  'top-rope': { name: 'top-rope' },
  'sauna': { name: 'sauna' },
  'yoga': { name: 'yoga' },
  'arial-silks': { name: 'arial-silks' }
}
