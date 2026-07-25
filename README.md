# indoor.rocks — parked branch: `park/database`

> **This is not `main`.** This branch is a snapshot of the Postgres/Drizzle experiment as it stood
> when it was parked on 2026-07-25, kept so the work isn't lost. `main` has the database code
> removed. Don't merge this branch as-is; lift whatever is useful when the site actually needs a
> database.

## Where the experiment got to

The goal was "can a Next.js server action talk to Postgres?" The answer turned out to be yes, and
that's about as far as it went. Nothing here is connected to climbing gyms.

What exists on this branch:

| File | What it is |
| --- | --- |
| `src/db/drizzle.ts` | Drizzle client over `pg`, hardcoded to `0.0.0.0:5432`, db `default`, user `postgres`. Reads `DATABASE_PW` from `.env.local`, **throws at module load** if it's unset. |
| `src/db/schema.ts` | One table: `users(id, full_name, phone)`. A tutorial table — unrelated to the gym data model in `src/app/dataModel.ts`. |
| `src/actions/todoActions.ts` | One server action, `getUserData()` — `select * from users`. |
| `migrations/` | A single generated migration, `0000_material_cardiac.sql`, plus drizzle-kit journal/snapshot. |
| `drizzle.config.ts` | drizzle-kit config pointing at the same local Postgres. |
| `src/app/page.tsx` | Renders `<DataRenderer dataPromise={getUserData()} />` — dumps the (empty) query result as JSON onto the homepage. |

Dependencies it pulls in: `drizzle-orm`, `drizzle-kit`, `pg`, `@types/pg`, `dotenv`.

## Why it got parked

That module-load `throw` in `src/db/drizzle.ts` is what broke `npm run build`. Next.js prerenders
`/` at build time, the server action runs, `DATABASE_PW` isn't set in CI or on a clean checkout, and
page-data collection dies:

```
✓ Compiled successfully
   Collecting page data ...
Error: make sure to export DATABASE_PW!
> Build error occurred
Error: Failed to collect page data for /
```

The site's gym data is plain TypeScript, so it needs no database to go live. The DB work was
blocking a deploy while providing nothing, so it came off `main`.

## Running it

Spin up a local Postgres:

```bash
docker run --name indoor-rocks-db -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

Then put `DATABASE_PW=mysecretpassword` in `.env.local` before `npm run dev` or `npm run build`.

## Known problems to fix before reviving any of this

- The `throw` at module load makes the DB a build-time dependency. Connect lazily instead.
- Connection details are hardcoded; there's no hosted database anywhere.
- The schema models `users`, not gyms. It would need to be written from scratch against
  `src/app/dataModel.ts`.
- `drizzle-kit`/`esbuild` on this branch carry known vulnerabilities (they left `main` with the
  parking commit).

---

# indoor.rocks (<http://indoor.rocks>)

> NOTE: this is very much a work-in-progress, and isn't yet near the point where its giving any value

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Infrastructure is setup (or will be setup*) in Google Cloud.

Currently under a private GCP project: [`indoor-rocks-sandbox-01`](https://console.cloud.google.com/iam-admin/iam?authuser=1&project=indoor-rocks-sandbox-01)

## Getting Started

Install NodeJS:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Reach out to me if you wanna help! I'd be thrilled to have folks to pair with and am open to suggestions and contributions.

## Development Log

Check out the [Dev Log](./DEVLOG.md) to check out what I've been doing day-to-day (and/or check out the commits!)
