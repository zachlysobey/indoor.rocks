import { getData } from "../src/app/getData";
import { duplicateGymAddresses } from "../src/app/duplicateGymAddresses";

// Run with a TypeScript runner (for example, `npx tsx scripts/report-duplicate-addresses.ts`).
// Reports candidates for manual inspection without failing CI: co-located gyms can be legitimate.
const collisions = duplicateGymAddresses(getData().climbingGyms);

if (collisions.length === 0) {
  console.log("No duplicate gym street addresses detected.");
} else {
  for (const collision of collisions) {
    console.log(`${collision.address}: ${collision.gyms.join(" / ")}`);
  }
  console.log(`${collisions.length} address(es) require review.`);
}
