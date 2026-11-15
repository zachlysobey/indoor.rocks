import { GymAmenity } from "../dataModel";

export const amenityMap: Record<GymAmenity['name'], GymAmenity> = {
  'free-weights': { name: 'free-weights' },
  'machines': { name: 'machines' },
  'bouldering': { name: 'bouldering' },
  'auto-belays': { name: 'auto-belays' },
  'top-rope': { name: 'top-rope' },
  'lead': { name: 'lead' },
  'sauna': { name: 'sauna' },
  'yoga': { name: 'yoga' },
  'arial-silks': { name: 'arial-silks' }
}

export const amenities = (...names: GymAmenity['name'][]): GymAmenity[] =>
  names.map(name => amenityMap[name]);
