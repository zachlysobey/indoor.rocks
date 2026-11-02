# 002 — Get something deployed

**Goal:** something real, ours, and not embarrassing at https://indoor.rocks

**Non-goals:** a database, auth, a CMS, complete gym coverage, a design system, a GCP load
balancer, Terraform, PR CI (lint/build checks on PRs are 003's job).

**Depends on:** [001 — Get things cleaned up](./001-get-things-cleaned-up.md). `npm run build`
passes on `main` (2026-11-01: `/` and `/_not-found` both prerender as static).

**Working style:** same as 001's ending: small increments, one PR per step where there's code,
**each branched off `main`, not stacked.** Steps 2–4 are console/CLI work with no PR; they get
logged in the DEVLOG and documented in step 6. Anything that touches DNS or creates cloud resources
gets confirmed before it runs.

> Status: in progress. Decisions settled 2026-11-01. Step 1 merged (#23).

---

## Decisions (Phase 1 — settled)

| Question | Answer | Why |
|---|---|---|
| Where does it host? | **GCS bucket `indoor.rocks`, behind Cloudflare** (DNS + CDN + HTTPS) | Keeps the original GCP intent with a real bucket we own, at $0. Cloudflare is the industry-standard front door. |
| Why not the GCP load balancer? | Deferred, not rejected | ~$18/mo for one static page. It earns its keep once there's a second thing to route to (e.g. a Cloud Run API under `/api`). The bucket we build now becomes its backend bucket, so nothing is thrown away; the upgrade is "create the LB, change one DNS record". |
| Why not Firebase / Cloudflare Pages? | Considered | Firebase doesn't give us a bucket we manage. Pages drops GCP entirely. |
| v1 content | **The existing 5 gyms** | Proof of life; coverage is a non-goal. |
| How much design? | **Publish what's there**, as-is | It's already readable. |
| Orphaned Terraform state | **Stays parked** ([#6](https://github.com/zachlysobey/indoor.rocks/issues/6)) | v1's GCP resources are created by hand with documented commands; Terraform adopts them later. Still: **do not `terraform apply`.** |

### Inventory, after the decisions

| Thing | Have | Need for v1 |
|---|---|---|
| Domain | **registered at GoDaddy** (2024-07-27, **expires 2027-07-27**). DNS hosted at IONOS as an "external domain" on an IONOS hosting contract; nameservers `ns1045.ui-dns.{com,de,org,biz}`. DNSSEC off. Apex + `www` → IONOS placeholder (a "Lysobey.com / Under Construction" page) | nameservers → Cloudflare, changed **at GoDaddy**; registration stays at GoDaddy |
| Mail | **none.** No `@indoor.rocks` mailbox has ever existed (IONOS offers to "Create an email address"). The MX/SPF/DKIM/DMARC records are IONOS defaults | nothing to protect; the IONOS defaults were not carried over. Cloudflare has explicit "this domain sends no mail" records instead (step 2) |
| App | Next.js App Router, one static page, builds clean | `output: 'export'` → plain files in `out/` |
| Content | 5 gyms, hardcoded TS | same 5 |
| Hosting | nothing | bucket `indoor.rocks` in `indoor-rocks-sandbox-01` (billing enabled; **no budget**: #6 shows the 2024 attempt created the plumbing, never the budget itself) |
| Pipeline | nothing | GitHub Action on push to `main` → `gcloud storage rsync` → Cloudflare cache purge |
| Infra-as-code | parked on `park/terraform` | out of scope; document the manual commands instead |

### Known compromise: Cloudflare → GCS is plain HTTP

GCS's website mode (index page, 404 page, `CNAME c.storage.googleapis.com`) only works over HTTP
on a custom hostname. Visitors get HTTPS to Cloudflare, and Cloudflare fetches from Google over
HTTP: SSL mode **Flexible**. That's acceptable for a public, static, form-less site. Fixing it
(a Worker fetching `https://storage.googleapis.com/indoor.rocks/...`, or the LB) is a follow-up
issue, filed in step 6.

---

## Phase 2 — Ship it

### Step 1 — Static export ✅ ([#23](https://github.com/zachlysobey/indoor.rocks/pull/23))

- `next.config.mjs`: `output: 'export'`. `npm run build` now writes `out/`; check that it has
  `index.html`, `404.html`, `favicon.ico`, `_next/static/…`.
- `out/` → `.gitignore`.
- Serve `out/` locally (`npx serve out`) and look at it.
- `delay(1000)` **stays** (001 step 2 kept it deliberately; it's paid at build time only).
- One-line address formatting (instead of `JSON.stringify` in a `<pre>`) was tried in #23 and
  dropped at review: out of scope. The page ships as-is.
- Title and description in `layout.tsx` are already real. Favicon is whatever's there; a better one
  isn't v1.

### Step 2 — Move DNS to Cloudflare (no PR, no site change)

Done alone so a problem can only be a DNS problem. The site keeps pointing at the IONOS
placeholder throughout. With no mail on the domain, the stakes are low: the worst case is the
placeholder going briefly unreachable.

Three parties: **GoDaddy** (registrar; owns the nameserver setting), **IONOS** (current DNS
host; the zone below), **Cloudflare** (new DNS host).

1. *(Zach)* Create a Cloudflare account (Free plan) and add the zone `indoor.rocks`. Cloudflare
   scans and imports the existing records.
2. Records: rather than importing, create exactly what's needed (done 2026-11-01 with the `cf` CLI,
   zone `9f0d22c0ad694eebaff688f771033aff`, nameservers `jasper`/`sierra.ns.cloudflare.com`):
   - The placeholder, unchanged: A + AAAA for `@` and `www` → the IONOS addresses, **DNS-only**.
   - No-mail records, moved up from step 4 (no point copying IONOS mail defaults just to delete
     them): `MX @ 0 .` (null MX), `TXT @ "v=spf1 -all"`, `TXT _dmarc "v=DMARC1; p=reject;"`.
   - The IONOS mail defaults and IONOS-internal records (`_dep_ws_mutex`, `_domainconnect`) are
     not carried over.
3. *(Zach)* **At GoDaddy:** set the domain's nameservers to Cloudflare's two. (DNSSEC is already
   off at the registry, so there's nothing to disable first.)
4. Verify: `dig NS indoor.rocks @1.1.1.1` shows Cloudflare; the placeholder still loads.
5. Later (step 6): remove `indoor.rocks` from the IONOS contract ("Remove external domain"). Not
   before Cloudflare is answering.

#### IONOS zone snapshot (2026-11-01)

| Type | Host | Value | IONOS "service" |
|---|---|---|---|
| CNAME | `_dmarc` | `dmarc.ionos.com` | DMARC |
| CNAME | `_domainconnect` | `_domainconnect.ionos.com` | Domain Connect |
| MX | `@` | `mx00.ionos.com` | Mail |
| MX | `@` | `mx01.ionos.com` | Mail |
| TXT | `@` | `v=spf1 include:_spf-us.ionos.com ~all` | Mail |
| CNAME | `s1-ionos._domainkey` | `s1.dkim.ionos.com` | Mail |
| CNAME | `s2-ionos._domainkey` | `s2.dkim.ionos.com` | Mail |
| CNAME | `s42582890._domainkey` | `s42582890.dkim.ionos.com` | Mail |
| CNAME | `autodiscover` | `adsredir.ionos.info` | Mail |
| A | `@` | `74.208.236.153` | Webhosting |
| AAAA | `@` | `2607:f1c0:100f:f000::2d4` | Webhosting |
| TXT | `_dep_ws_mutex` | `b171896e…a6a_1756221162974` (IONOS deploy lock) | Webhosting |
| A | `www` | `74.208.236.153` | Webhosting |
| AAAA | `www` | `2607:f1c0:100f:f000::2d4` | Webhosting |

### Step 3 — Bucket (no PR)

1. Confirm the gcloud account and project (`gcloud config list`; 001 found the active project wasn't
   the one you'd expect). Target: `indoor-rocks-sandbox-01`.
2. *(Zach)* Verify `indoor.rocks` in Google Search Console with the same Google account gcloud uses
   (a TXT record, now added at Cloudflare). GCS refuses to create a domain-named bucket otherwise.
3. *(Zach)* Create a billing budget on the project **before anything goes public**: console is
   fine, e.g. $5/month with email alerts at 50/90/100%. (Alerts notify; they don't cap spend.
   Cloudflare absorbs most traffic, but the bucket is also directly reachable at
   `storage.googleapis.com/indoor.rocks`.) The parked Terraform state is not touched.
   **Done 2026-11-01:** `indoor-rocks-budget-alerts`, ordinary alert-only budget (no spend cap),
   monthly, $5, project `indoor-rocks-sandbox-01`, all services, all credits counted, email
   alerts at 50/90/100% actual + 100% forecasted, no Pub/Sub topic. Created in the console;
   Terraform can `import` it later (#6).
4. Create the bucket: `gs://indoor.rocks`, region **`us-east1`** (inside the GCS always-free tier),
   uniform bucket-level access, `allUsers` → `roles/storage.objectViewer`, website config
   main page `index.html` / error page `404.html`.
5. Upload `out/` by hand, using the same two `rsync` commands as the step 5 workflow.
6. Test **before touching DNS**:
   `curl -si -H 'Host: indoor.rocks' http://c.storage.googleapis.com/` (GET, not `-I`, so the body
   comes back) returns 200 and contains a gym name; a bogus path returns our 404 page.

### Step 4 — Cut over (no PR)

In Cloudflare:

1. Apex: replace the IONOS A **and AAAA** records with `CNAME indoor.rocks → c.storage.googleapis.com`,
   **proxied** (Cloudflare flattens CNAMEs at the apex).
2. `www`: proxied `CNAME www → indoor.rocks`, plus a redirect rule `www.indoor.rocks/*` →
   `https://indoor.rocks/${1}` (301, keep the query string).
3. SSL/TLS mode **Flexible**; **Always Use HTTPS** on.
4. Cache rule on `indoor.rocks`: eligible for cache, **Edge TTL: ignore cache-control header,
   use e.g. 1 day**, Browser TTL: respect origin. Without the override, Cloudflare honors the
   HTML's `max-age=0` and every page view still goes to GCS. Deploys purge (step 5).
5. Verify: `https://indoor.rocks` serves our page with a valid cert; `http://` → `https://`;
   `www` → apex; a bogus path gives our 404.

**At this point the goal is met except for automation.**

### Step 5 — Push-to-deploy (PR)

One-time GCP setup (documented commands, run with confirmation):

- Service account `indoor-rocks-deployer`, with `roles/storage.objectAdmin` **on the bucket only**.
- Workload Identity Federation: a pool + GitHub OIDC provider, with an attribute condition
  limited to `zachlysobey/indoor.rocks` on `refs/heads/main`. No JSON keys anywhere.
- `roles/iam.workloadIdentityUser` on the service account, granted to the pool's principal set
  for this repo. That's what lets the GitHub identity impersonate the deployer.
- *(Zach)* Cloudflare API token scoped to "Cache Purge" on the `indoor.rocks` zone → GitHub repo
  secret, plus the zone ID.

`.github/workflows/deploy.yml`, on push to `main` + `workflow_dispatch`:

Job `permissions: { contents: read, id-token: write }`. Without `id-token: write` there's no OIDC
token to exchange.

1. `actions/setup-node` with `node-version-file: .nvmrc`, `npm ci`, `npm run build`.
2. `google-github-actions/auth` (WIF) + `setup-gcloud`.
3. Hashed assets first, **never deleted**:
   `gcloud storage rsync --recursive --cache-control='public, max-age=31536000, immutable' out/_next gs://indoor.rocks/_next`.
   Old builds' chunks stay put, so HTML still cached at the edge (or open in a browser) keeps
   working mid-deploy. They're a few hundred KB per deploy; pruning is a someday chore.
4. Then everything else, with deletes:
   `gcloud storage rsync --recursive --delete-unmatched-destination-objects --exclude='^_next/' --cache-control='public, max-age=0, must-revalidate' out/ gs://indoor.rocks`.
   (Confirm `--exclude` also shields `_next/` objects at the destination from deletion before
   relying on it.)
5. Purge the Cloudflare zone cache.

Action versions pinned. Verify by merging this PR itself: its merge commit should deploy.

### Step 6 — Write it down (PR)

- README: a short "Deploying" section covering how it works, where things live (GCP project,
  bucket, Cloudflare zone), and how to deploy by hand.
- `docs/` or a section of the README: the exact gcloud commands from steps 3 and 5, so Terraform
  (#6) has something to import later.
- DEVLOG entry for the whole plan.
- Re-snapshot `current-status.html` (frozen-per-plan, as decided in 001).
- Comment on #6: what now exists in GCP that Terraform should eventually own.
- *(Zach)* IONOS: remove `indoor.rocks` from the contract ("Remove external domain").
- *(Zach)* GoDaddy: confirm auto-renew is on. The domain expires **2027-07-27**.
- File issues: "Close the Cloudflare → GCS HTTP hop" and "GCP load balancer, when there's a
  second backend".

---

**Done when:** https://indoor.rocks loads our page over HTTPS, `www` and `http://` redirect to it,
and a commit to `main` updates the site without anyone touching a console.
