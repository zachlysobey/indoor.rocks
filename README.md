# indoor.rocks — parked branch: `park/terraform`

> # ⚠️ DO NOT RUN `terraform apply` FROM THIS BRANCH
>
> The remote state tracks **four live GCP resources that this branch does not declare.** An `apply`
> here plans to **destroy all four**, including disabling two project services. Read the whole of
> this document before running any Terraform command against
> `gs://indoor-rocks-terraform-state`.

**This is not `main`.** It's a snapshot of `terraform/` as it stood when it was parked on
2026-07-28, kept so the work isn't lost. `main` has `terraform/` removed. GCP is still an
"eventually", so nothing has been destroyed or rebuilt — the four resources below are untouched and
still running.

## The situation in one paragraph

`terraform/main.tf` on this branch declares a GCS backend and a `google` provider, and **zero
resources**. The remote state, however, is not empty: it tracks four resources from a cost-guardrail
setup. The config that created them was never merged to `main` — but it does still exist, on the
[`terraform-progress`](https://github.com/zachlysobey/indoor.rocks/tree/terraform-progress) branch,
which was never merged. So the drift is recoverable; it just isn't reconciled.

## What's actually in the remote state

Backend: `gs://indoor-rocks-terraform-state`, prefix `terraform/state`.
State serial **6**, written by Terraform **1.9.3**. Four resources, all in project
`indoor-rocks-sandbox-01`:

| Resource | ID |
| --- | --- |
| `google_monitoring_notification_channel.email` | `projects/indoor-rocks-sandbox-01/notificationChannels/14980181573164564859` (→ zach@lysobey.com) |
| `google_project_service.monitoring` | `indoor-rocks-sandbox-01/monitoring.googleapis.com` |
| `google_project_service.serviceusage` | `indoor-rocks-sandbox-01/serviceusage.googleapis.com` |
| `google_pubsub_topic.budget_notifications` | `projects/indoor-rocks-sandbox-01/topics/budget-notifications` |

Note that two of them are **enabled project services**. Destroying those disables APIs on the
project, which is more disruptive than deleting a pub/sub topic.

## Where the config for those four lives

All four map exactly to `resource` blocks on the
[`terraform-progress`](https://github.com/zachlysobey/indoor.rocks/tree/terraform-progress) branch
(`terraform/main.tf`, commit `22a92cc` — *"trying to get billing usage alerts"*).

That branch declares **nine** resources. Only the four above ever made it into state, which means
the `apply` partially succeeded and then failed. The five that were declared but never created:

- `google_project_iam_member.billing_user`
- `google_project_iam_member.billing_viewer`
- `google_project_iam_member.logging_config_writer`
- `google_billing_budget.budget` — monthly budget with 50% / 90% / 100% threshold rules
- `google_logging_project_sink.budget_notifications_sink`

The shape of that failure — the IAM bindings and the billing budget missing, the plumbing present —
fits the Terraform service account not having the billing permissions the budget resource needs. The
branch name is literally "trying to get billing usage alerts", so this looks like where it got stuck.

`terraform-progress` also carries four extra variables that this branch's `variables.tf` lacks:
`service_account_email`, `billing_account_id`, `notification_email`, `budget_amount`.

## Reconciling, whenever GCP gets picked back up

Do not start with `apply`. Options, roughly in order of sanity:

1. **Merge the config forward.** Take `terraform/main.tf` and `variables.tf` from
   `terraform-progress`, then `terraform plan` and confirm the four tracked resources show as
   no-ops. The five never-created ones will show as additions — decide then whether you still want
   budget alerts.
2. **Abandon and clean up.** If the guardrails aren't wanted, `terraform state rm` each of the four
   and delete them by hand in the console, or `apply` deliberately with a plan you've actually read.
3. **Start over.** Delete the state object and the four resources, and re-declare from scratch. Only
   sane because nothing depends on any of this.

Either way, `terraform plan` is read-only and safe. **`apply` is not.** Read the plan output.

## Local gotchas that will bite you

- **Your active gcloud project is `z-megarepo`, not `indoor-rocks-sandbox-01`.** Check with
  `gcloud config get-value project` before running anything, or you'll operate against the wrong
  project.
- `terraform/README.md` (the original setup notes, still on this branch) tells you to
  `gcloud config set project indoor-rocks-sandbox-01`. That's the right project for this state.
- `terraform.tfvars` and `terraform-service-account-key.json` are gitignored and are **not** here.
  You'll need to recreate them; `variables.tf` has no defaults for `project` or `region`.
- Provider pinned to `hashicorp/google` **5.39.1** in `.terraform.lock.hcl`. It's from 2024 — expect
  a provider upgrade to be part of any reconciliation.

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
