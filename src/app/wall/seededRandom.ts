/* A small seeded PRNG (mulberry32), with the helpers the wall layout draws on. The same seed always
   gives the same sequence, so a seed is all it takes to reproduce a wall. */
export function seededRandom(seed: number) {
  let state = seed >>> 0;
  const next = () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  return {
    /** A number in [0, 1). */
    next,
    /** A number in [min, max). */
    between: (min: number, max: number) => min + next() * (max - min),
    /** One of the items. */
    pick: <T,>(items: readonly T[]) => items[Math.floor(next() * items.length)],
    /** A shuffled copy of the items. */
    shuffle: <T,>(items: readonly T[]) => {
      const result = [...items];
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    },
  };
}
