# 001 — Get things cleaned up

**Goal:** nothing obviously broken, no mysterious loose threads. This is dipping toes back in the
water — fast and easy, just getting the starting place cleaner. Partial work gets parked on a
branch (with a GitHub issue pointing at it), not finished.

**Non-goals:** hosting, CI, design, content, styling (CSS stays as-is), data-model tidying
(`arial-silks` typo, `src/app/data/` move, unpopulated fields), toolchain additions (Prettier,
`typecheck` script, Vitest — those become one GH issue), and framework major bumps.

**Working style:** smallest shippable increments. One commit per increment, usually one step per PR.
Started out one-PR-at-a-time; from step 4 on, small PRs get *stacked* (each based on the previous)
so review can happen without serializing the work. DEVLOG entry as things land.

**Followed by:** [002 — Get something deployed](./002-get-something-deployed.md), unblocked after
step 1.

---

## Numbering

"Step N" below is this plan's own sequence. It does **not** match GitHub PR numbers — the repo
already had PRs #1–#2 before this plan started, and issues share the same counter. Current mapping:

| Step | GitHub | State |
|---|---|---|
| 1 — Park the database experiment | PR [#3](https://github.com/zachlysobey/indoor.rocks/pull/3), issue [#2](https://github.com/zachlysobey/indoor.rocks/issues/2) | merged |
| 2 — Strip scaffold residue | PR [#5](https://github.com/zachlysobey/indoor.rocks/pull/5) | merged |
| 3 — Park the Terraform debris | PR [#7](https://github.com/zachlysobey/indoor.rocks/pull/7), issue [#6](https://github.com/zachlysobey/indoor.rocks/issues/6), draft PR [#8](https://github.com/zachlysobey/indoor.rocks/pull/8) | merged (#8 stays draft) |
| 4 — Security patches + Node | PRs [#9](https://github.com/zachlysobey/indoor.rocks/pull/9), [#10](https://github.com/zachlysobey/indoor.rocks/pull/10) → re-landed as [#17](https://github.com/zachlysobey/indoor.rocks/pull/17), [#11](https://github.com/zachlysobey/indoor.rocks/pull/11); issues [#12](https://github.com/zachlysobey/indoor.rocks/issues/12)–[#14](https://github.com/zachlysobey/indoor.rocks/issues/14) | merged |
| 5 — README truth-fix | PR [#18](https://github.com/zachlysobey/indoor.rocks/pull/18) | merged |
| 6 — Publish `current-status.html` | PR [#19](https://github.com/zachlysobey/indoor.rocks/pull/19) (`docs/current-status`) | open |
| 7 — DEVLOG + commit `plans/` | PR [#16](https://github.com/zachlysobey/indoor.rocks/pull/16) (`docs/devlog`), rebased onto step 6 | open |
| Housekeeping — "Toolchain additions" issue | — | **not filed** |

---

## Step 1 — Park the database experiment; fix the build ✅

The DB spike (Drizzle + local Postgres, a `users` table unrelated to gyms) is what broke
`npm run build`. It got parked, not deleted.

- Branch `park/database` off `main`: keeps the DB work, with its own README describing where the
  experiment got to.
- On `main`: removed `src/db/`, `src/actions/todoActions.ts`, `migrations/`, `drizzle.config.ts`,
  the homepage `<DataRenderer>` usage, and the `drizzle-*` / `pg` / `dotenv` deps.
- Issue #2 describes the DB progress and links the branch; mentioned in `current-status.html`.
- `npm run build` passes — 5/5 static pages. **This unblocked 002.**

## Step 2 — Strip scaffold residue ✅

- The four Vercel starter cards (`src/app/page.tsx`).
- `Create Next App` title/description in `src/app/layout.tsx` (real metadata is 002's job —
  here, just stop lying).
- The `console.log('ct', …)` that dumped the CT gym array into `next build` output.
- **`delay(1000)` was kept**, contrary to the original draft of this plan. It demonstrates the
  Suspense boundaries in `next dev`, and since `/` is statically prerendered the second is paid at
  build time and never by a visitor.
- CSS files untouched (per E1).

## Step 3 — Park the Terraform debris ✅

State tracks four resources (budget-alert guardrails) that the config on `main` never declared;
`terraform apply` today would destroy all four, including disabling two project services.

- Branch `park/terraform` off `main`: keeps `terraform/`, plus a README documenting the four
  orphaned state resources, the **do-not-apply** warning, and that the active gcloud project is
  `z-megarepo`, not `indoor-rocks-sandbox-01`.
- On `main`: removed `terraform/`.
- Issue #6 links the branch. (GCP is still "eventually", so nothing gets destroyed or rebuilt.)
- **Correction found while doing this:** the `.tf` files for those four resources were never *lost*
  — they were never *merged*. They're on `terraform-progress` (`22a92cc`), which now has a draft
  PR (#8) so it stops being a branch nobody remembers. It declares nine resources; the five that
  never landed are the three IAM bindings, the billing budget and the logging sink — consistent
  with the service account lacking billing-account-level permission.

## Step 4 — Security patches + Node version ✅

Per C1: bump only for vulnerabilities, no framework majors. Landed as small stacked PRs rather than
one, so each is reviewable on its own.

- #9 — Next.js `14.2.5 → 14.2.35`, patched within the same major. Clears the one **critical**.
- #10 — one `npm audit fix`, lockfile only; root advisory packages 12 → 5. The drizzle/esbuild
  highs already left with step 1. **Merged into its base branch rather than into `main`**, so the
  lockfile change stranded on `sec/next-14.2.35`; re-landed on `main` as **#17**. Cite #17, not
  #10, when describing what reached `main`.
- #11 — `.nvmrc`: `lts/iron` (Node 20, EOL) → `lts/jod` (Node 22).
- `main` is `9a07836`. Clean-checkout build emits 5/5 static pages; lint clean.
- Lesson for future stacks: merge bottom-up into `main` and retarget the children, or the middle of
  the stack silently doesn't ship.
- Filed rather than fixed, to keep this stretch small: Node 24 (issue #12), the remaining dependency
  majors (issue #13 — every direct dep is 1–6 majors behind, and this is what `npm audit` to zero
  actually needs), and Renovate (issue #14).

## Step 5 — README truth-fix

Branch `docs/readme` off `main`, PR #18.

- Delete the GCP "is setup (or will be setup*)" claim and the project link. Nothing is deployed and
  no application infrastructure was ever built there.
- **Removed, not rewritten.** The README's job is what the project is and roughly where it stands —
  it should not enumerate what doesn't exist yet. The existing work-in-progress note already covers
  general status; parked work is tracked in issues; `current-status.html` carries the detail.
- Keep the structure, Getting Started, and the contributing invitation.
- Don't add links to `plans/` yet — it isn't committed until step 7.

## Step 6 — Publish `current-status.html`

Branch `docs/current-status`, stacked on `docs/readme`. This file was written as a throwaway local
snapshot; it turned out to be the best single description of where things are, so it gets committed
at the repo root. Also a candidate to become published content in 002.

Before committing, make it true — it was written on 2026-07-25 and has drifted:

- Header still reads *"Snapshot taken 2026-07-25 · last commit `a149e21`"*. Re-stamp to the actual
  date and commit.
- Steps 1–3 are described as "awaiting review"; they're merged.
- The Hosting row still says Terraform declares a backend and provider on `main` — `terraform/` is
  gone from `main` as of step 3.
- The toolchain table's `DEVLOG.md` row ("stops at July 29th with no year, never mentions the DB
  work") is fixed by step 7; the commit count is stale.
- The footer references `plans/questionnaire.md`, **which does not exist**. Remove or replace it.
- Steps 4–7 need reflecting: the security stack is merged (`main` @ `9a07836`, Next 14.2.35,
  `lts/jod`), issues #12–#14 exist. The Toolchain table's Next/Node rows say "in PR #9 / #11" as
  though pending.

Decide and state in the file whether it's a frozen dated snapshot or a living document. Recommend
frozen-per-plan: re-snapshot at the end of each plan rather than editing continuously, so it stays
a record instead of a second README.

## Step 7 — DEVLOG + commit the plans

PR #16 already exists on `docs/devlog` with the year-stamping and backfill. Rebase it onto
`docs/current-status`, re-target its base, and extend it — don't open a new PR.

Already in it:

- Years on the 2024 entries; backfilled July 31st / August 6th / August 15th 2024 (the DB scaffold,
  which is what left the build broken and was never logged).
- Named the ~23-month gap rather than letting the dates jump silently.
- One narrative entry for July 25th–30th, 2026 covering steps 1–4.

Added in the rework:

- `plans/001` and `plans/002` committed here. Both, not just 001 — 001's "Followed by" link points
  at 002, and committing one without the other ships a dead link.
- The DEVLOG's relative links to `plans/`, which #16 originally omitted because `plans/` wasn't
  committed.
- Steps 5–7 logged: the README fix, `current-status.html` landing, the plans landing.
- Audit-fix attribution corrected — the entry linked **#10**, but #10 merged into the stack and
  what reached `main` was **#17**. Recorded as a lesson about stacked-PR merge order rather than
  quietly swapping the link.
- Date range extended to August 2nd; `npm audit` figures replaced with verified current ones.

Still open — **Zach's call**: the **July 29th, 2024** entry describes work whose commits are all
dated July 30th. Left as written, year added only.

## Housekeeping (no PR)

- **Not yet filed:** one GH issue, "Toolchain additions" — Prettier, `typecheck` script, Vitest.
  CI is neither here nor there; it lands in a future 003. This is the last open housekeeping item.
- `plans/` and `current-status.html` were originally going to stay local. They don't — they land in
  steps 6 and 7.
- Issues #4 ("Feature idea stubs") and #15 ("hold manufacturers") predate/sit outside this plan.
  Leave them alone; they're 002-and-beyond content.

---

**Done when:** steps 5–7 are merged, the "Toolchain additions" issue exists, the
two parked branches and their issues exist, build and lint pass on `main`, docs describe reality,
and nothing on `main` is a mystery. No stricter bar than "better than it was."
