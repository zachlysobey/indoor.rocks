<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Tracking issues

Some GitHub issues hold long-lived state that outlives any single PR. Read the relevant ones before related work, and update them as part of that work:

| Issue | Tracks | Update when |
|---|---|---|
| #81 | State coverage | A state's gyms land. |
| #76 | Gym data follow-ups: weak evidence a gym is open, unverified details | A PR leaves something unconfirmed, or settles an item. |
| #77 | Closed and replaced gyms, which shouldn't be re-added | A gym turns out to be closed or renamed. Remove it from the data in the same PR. |
| #78 | Announced gyms that aren't open yet | One is announced, opens (add it to the data and tick it off), or falls through. |
| #82–#85 | Data tooling: verification fields, geocoding, `getData` imports, duplicate checks | The work lands. Then revise any guidance in this file that it changes. |

When one of these issues closes, remove its row.

## Adding gyms

- Check #77 and #78 first.
- Include commercial or nonprofit gyms open to the public, with evidence that they've been open within about the last year. Leave out rec centers, colleges, YMCAs, Life Time, outfitters and kids' venues.
- List only the amenities a source names, and set `website` only when a source shows it. Note anything inferred in #76.
- A new state needs an entry in `src/app/states.ts` (alphabetical by name) and a bounding box in `src/app/states.test.ts`.
