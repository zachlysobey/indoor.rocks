# 002 — Get something deployed

**Goal:** something real, ours, and not embarrassing at https://indoor.rocks

**Non-goals:** a database, auth, a CMS, complete gym coverage, a design system.

**Depends on:** [001 — Get things cleaned up](./001-get-things-cleaned-up.md). `npm run build` has
to pass before any of this is possible.

> Status: skeleton. To be fleshed out before we start. See [current-status.html](../current-status.html).

---

## Phase 1 — Inventory

What we have vs. what we need. Revisit once 001 is done.

| | Have | Need for v1 |
|---|---|---|
| Domain | registered, IONOS DNS, serving a placeholder | DNS pointed at the new host |
| App | Next.js App Router, one page, builds clean (after 001) | one page worth reading |
| Content | 5 gyms, hardcoded TS, decent type model | ? gyms, real fields, non-JSON presentation |
| Hosting | nothing | one host, chosen |
| Pipeline | nothing | push-to-deploy (or a documented manual command) |
| Infra-as-code | empty Terraform + 4 orphaned state resources | ? maybe out of scope for v1 |

**Open questions to settle here:**

1. **Where does it host?** GCP was the original plan and there's Terraform groundwork — but the app is static and Vercel/Cloudflare Pages is a same-day deploy. Does the original GCP intent still matter?
2. **What is v1's content?** 5 gyms is thin. Ship the 5 as a proof of life, or expand first?
3. **How much design?** Plain-but-clean semantic HTML is probably enough to not be embarrassing.
4. **The orphaned Terraform state** — if 001 deferred this, it lands here, and the answer depends on question 1. (Don't `terraform apply` before deciding; it would destroy all four resources.)

## Phase 2 — Ship it

- [ ] Make the page presentable (real gym cards, not `JSON.stringify` in a `<pre>`)
- [ ] Real page title, description, favicon
- [ ] Deploy to the chosen host, verify on its default URL
- [ ] Point `indoor.rocks` DNS at it; confirm HTTPS + apex/`www`
- [ ] Automate deploys on push to `main`

**Done when:** https://indoor.rocks loads our page over HTTPS, and a commit to `main` updates it.
