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

> Status: planned. Decisions settled 2026-11-01. Nothing started.

---

## Decisions (Phase 1 — settled)

| Question | Answer | Why |
|---|---|---|
| Where does it host? | **GCS bucket `indoor.rocks`, behind Cloudflare** (DNS + CDN + HTTPS) | Keeps the original GCP intent with a real bucket we own, at $0. Cloudflare is the industry-standard front door. |
| Why not the GCP load balancer? | Deferred, not rejected | ~$18/mo for one static page. It earns its keep once there's a second thing to route to (e.g. a Cloud Run API under `/api`). The bucket we build now becomes its backend bucket, so nothing is thrown away; the upgrade is "create the LB, change one DNS record". |
| Why not Firebase / Cloudflare Pages? | Considered | Firebase doesn't give us a bucket we manage. Pages drops GCP entirely. |
| v1 content | **The existing 5 gyms** | Proof of life; coverage is a non-goal. |
| How much design? | **Publish what's there** | It's already readable. Only optional tweak: see step 1. |
| Orphaned Terraform state | **Stays parked** ([#6](https://github.com/zachlysobey/indoor.rocks/issues/6)) | v1's GCP resources are created by hand with documented commands; Terraform adopts them later. Still: **do not `terraform apply`.** |

### Inventory, after the decisions

| Thing | Have | Need for v1 |
|---|---|---|
| Domain | **registered at GoDaddy** (2024-07-27, **expires 2027-07-27**). DNS hosted at IONOS as an "external domain" on an IONOS hosting contract; nameservers `ns1045.ui-dns.{com,de,org,biz}`. DNSSEC off. Apex + `www` → IONOS placeholder (a "Lysobey.com / Under Construction" page) | nameservers → Cloudflare, changed **at GoDaddy**; registration stays at GoDaddy |
| Mail | **none.** No `@indoor.rocks` mailbox has ever existed (IONOS offers to "Create an email address"). The MX/SPF/DKIM/DMARC records are IONOS defaults | nothing to protect; replace the defaults with explicit "this domain sends no mail" records (step 4) |
| App | Next.js App Router, one static page, builds clean | `output: 'export'` → plain files in `out/` |
| Content | 5 gyms, hardcoded TS | same 5 |
| Hosting | nothing | bucket `indoor.rocks` in `indoor-rocks-sandbox-01` (already has billing + budget alerts) |
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

### Step 1 — Static export (PR)

- `next.config.mjs`: `output: 'export'`. `npm run build` now writes `out/`; check that it has
  `index.html`, `404.html`, `favicon.ico`, `_next/static/…`.
- `out/` → `.gitignore`.
- Serve `out/` locally (`npx serve out`) and look at it.
- `delay(1000)` **stays** (001 step 2 kept it deliberately; it's paid at build time only).
- **Optional, decide at review:** render the address as one line ("221 N 14th St, Brooklyn, NY
  11249") instead of `JSON.stringify` in a `<pre>`. That's the one bit that looks broken. ~5 lines.
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
2. Check the import against the snapshot below. Only the apex + `www` A/AAAA records matter (the
   placeholder). The mail defaults can come along as-is; step 4 replaces them. Don't bother with
   the IONOS-internal ones (`_dep_ws_mutex`, `_domainconnect`).
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
3. Create the bucket: `gs://indoor.rocks`, region **`us-east1`** (inside the GCS always-free tier),
   uniform bucket-level access, `allUsers` → `roles/storage.objectViewer`, website config
   main page `index.html` / error page `404.html`.
4. Upload `out/` by hand (`gcloud storage rsync --recursive --delete-unmatched-destination-objects`).
5. Test **before touching DNS**:
   `curl -sI -H 'Host: indoor.rocks' http://c.storage.googleapis.com/` returns 200 and our HTML; a
   bogus path returns our 404 page.

### Step 4 — Cut over (no PR)

In Cloudflare:

1. Apex: replace the IONOS A **and AAAA** records with `CNAME indoor.rocks → c.storage.googleapis.com`,
   **proxied** (Cloudflare flattens CNAMEs at the apex).
2. `www`: proxied `CNAME www → indoor.rocks`, plus a redirect rule `www.indoor.rocks/*` →
   `https://indoor.rocks/${1}` (301, keep the query string).
3. SSL/TLS mode **Flexible**; **Always Use HTTPS** on.
4. Cache rule: cache everything on `indoor.rocks`, so HTML is served from the edge too. Deploys
   purge (step 5).
5. No-mail records: delete the IONOS mail defaults (MX, SPF, the three DKIM CNAMEs, `_dmarc`,
   `autodiscover`) and add `MX @ 0 .` (null MX), `TXT @ "v=spf1 -all"`, and
   `TXT _dmarc "v=DMARC1; p=reject;"`, so nobody can send mail as `@indoor.rocks`.
6. Verify: `https://indoor.rocks` serves our page with a valid cert; `http://` → `https://`;
   `www` → apex; a bogus path gives our 404.

**At this point the goal is met except for automation.**

### Step 5 — Push-to-deploy (PR)

One-time GCP setup (documented commands, run with confirmation):

- Service account `indoor-rocks-deployer`, with `roles/storage.objectAdmin` **on the bucket only**.
- Workload Identity Federation: a pool + GitHub OIDC provider, with an attribute condition
  limited to `zachlysobey/indoor.rocks` on `refs/heads/main`. No JSON keys anywhere.
- *(Zach)* Cloudflare API token scoped to "Cache Purge" on the `indoor.rocks` zone → GitHub repo
  secret, plus the zone ID.

`.github/workflows/deploy.yml`, on push to `main` + `workflow_dispatch`:

1. `actions/setup-node` with `node-version-file: .nvmrc`, `npm ci`, `npm run build`.
2. `google-github-actions/auth` (WIF) + `setup-gcloud`.
3. `gcloud storage rsync --recursive --delete-unmatched-destination-objects out/ gs://indoor.rocks`.
4. Cache headers: `_next/static/**` → `public, max-age=31536000, immutable`; HTML →
   `public, max-age=0, must-revalidate` (Cloudflare's edge TTL comes from the cache rule instead).
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
