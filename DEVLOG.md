# Development Log

## July 27th, 2024

* Break ground, init new Next.js app

## July 28th, 2024

* Pairing with SHABI, Moshood Olawale <shabimoshood07@gmail.com>, adding React Suspense

## July 29th, 2024

* A little refactoring
* Set up new GCP project: [`indoor-rocks-sandbox-01`](https://console.cloud.google.com/iam-admin/iam?authuser=1&project=indoor-rocks-sandbox-01)
* Set up GCP service account for Terraform

## July 31st, 2024

* Moved Terraform state to a remote GCS backend, `gs://indoor-rocks-terraform-state`

## August 6th, 2024

* Updated npm dependencies
* Installed Drizzle, `dotenv` and `pg` — starting on a database layer
* Tried to get billing usage alerts working in Terraform. Got the pub/sub topic, the notification
  channel and two project services created, then hit a wall on the budget resource itself and
  stopped. That work never merged; it's on the `terraform-progress` branch.

## August 15th, 2024

* Scaffolded out the database ([#1](https://github.com/zachlysobey/indoor.rocks/pull/1)) — Drizzle
  wired to a local Docker Postgres, one `users` table, and a server action on the homepage to prove
  the connection worked.

...and then nothing for about 23 months.

## July 25th – August 2nd, 2026

Picked it back up. The goal for this stretch was deliberately small: nothing obviously broken, no
mysterious loose threads. Not new features — just making the starting place honest. Written up as
[plan 001, "Get things cleaned up"](./plans/001-get-things-cleaned-up.md).

**The state it was found in.** `npm run build` was failing on any clean checkout. The homepage
rendered a server action that imported the Drizzle client, which throws at module load when
`DATABASE_PW` is unset — and Next.js prerenders `/` at build time, so page-data collection died. The
database experiment had, in effect, made the site unbuildable and unshippable.

**Parked the database experiment**
([#3](https://github.com/zachlysobey/indoor.rocks/pull/3), tracked in
[#2](https://github.com/zachlysobey/indoor.rocks/issues/2)). Removed `src/db/`, the server action,
`migrations/`, `drizzle.config.ts` and the `drizzle`/`pg`/`dotenv` deps from `main`. Nothing was
deleted outright — it all lives on the `park/database` branch with a README explaining where the
experiment got to and what would need fixing to revive it. Build passes again. The gym data is plain
TypeScript, so the site needs no database to go live at all.

**Stripped scaffold residue** ([#5](https://github.com/zachlysobey/indoor.rocks/pull/5)). The four
Vercel starter cards, and the `Create Next App` title/description that had been sitting in the
browser tab for two years. Also a stray `console.log` that was dumping the CT gym array into
`next build` output. Kept the `delay(1000)` — it demonstrates the Suspense boundaries in `next dev`,
and since `/` is statically prerendered the second is paid at build time and never by a visitor.

**Parked the Terraform debris** ([#7](https://github.com/zachlysobey/indoor.rocks/pull/7), tracked in
[#6](https://github.com/zachlysobey/indoor.rocks/issues/6)). `terraform/` on `main` declared a
backend, a provider, and zero resources — but the remote state tracks four live resources from the
August 2024 budget-alert work. Running `terraform apply` would have planned to **destroy all four**,
including disabling two project services. That footgun is now off `main` and on `park/terraform`,
documented.

Worth recording, because the earlier assessment got it wrong: the config for those four resources
was **not** lost. It was never merged, but it's on the `terraform-progress` branch, and all four map
exactly to resource blocks there. That branch is now a draft PR
([#8](https://github.com/zachlysobey/indoor.rocks/pull/8)) rather than a branch nobody remembers.
Best guess at why it stalled in 2024: `google_billing_budget` acts on the *billing account*, but the
IAM bindings written for it were project-level, so the service account never had the permission it
needed.

**Security patches**, as a stack of small PRs — Next.js `14.2.5` → `14.2.35`
([#9](https://github.com/zachlysobey/indoor.rocks/pull/9)), which clears the one critical advisory
without leaving the 14.2 line; one run of `npm audit fix`, lockfile only; and `.nvmrc` from
`lts/iron` (Node 20, end-of-life) to `lts/jod`
([#11](https://github.com/zachlysobey/indoor.rocks/pull/11)).

The audit fix took a detour worth writing down. [#10](https://github.com/zachlysobey/indoor.rocks/pull/10)
was merged into its own base branch instead of into `main`, so GitHub happily marked it merged while
the lockfile change sat stranded one commit off to the side. Re-landed as
[#17](https://github.com/zachlysobey/indoor.rocks/pull/17). The lesson for future stacks: merge
bottom-up into `main` and retarget the children, or the middle of the stack quietly doesn't ship.

`main` builds and lints clean on Node 22 — checked on a clean checkout, 5/5 static pages, no ESLint
warnings. `npm audit` is down to 9 highs and no criticals; what's left is all downstream of Next 14
and needs the major bump.

**Filed rather than fixed**, to keep this stretch small: Node 24
([#12](https://github.com/zachlysobey/indoor.rocks/issues/12)), the remaining dependency majors
([#13](https://github.com/zachlysobey/indoor.rocks/issues/13) — every direct dep is 1–6 majors
behind, and this is also what's needed to get `npm audit` to zero), and Renovate
([#14](https://github.com/zachlysobey/indoor.rocks/issues/14)), so the next two-year gap doesn't
accumulate the same way.

**Made the docs true**, which was the point of the whole stretch. The README claimed infrastructure
was "setup (or will be setup\*)" in Google Cloud — an asterisk with no footnote, attached to a claim
that was never true of anything deployable. Deleted rather than rewritten
([#18](https://github.com/zachlysobey/indoor.rocks/pull/18)): a README should say what the project
is and roughly where it stands, not enumerate what doesn't exist yet. The issues track the parked
work.

`current-status.html` ([#19](https://github.com/zachlysobey/indoor.rocks/pull/19)) was written on
July 25th to answer "where is this thing, really?" after the idle stretch, and turned out to be the
clearest single description of the project. It's in the repo now, re-stamped — and treated as a
dated snapshot re-issued at the end of each plan, rather than a document that quietly rots between
edits.

The plans land here too: [001](./plans/001-get-things-cleaned-up.md) is what this entry describes,
and [002](./plans/002-get-something-deployed.md) is what's next.

Next up, then: plan 002, "Get something deployed". The site has been buildable-in-principle and
undeployed for two years; that's the thing worth fixing.
