# indoor.rocks terraform

> ## ⚠️ Read before running anything
>
> This config is **unreconciled against its remote state**. Four resources declared here already
> exist in `gs://indoor-rocks-terraform-state` (serial 6); five more declared here have never been
> created. `terraform plan` is read-only and safe. **Run it and read the output before `apply`.**
>
> Background and the full resource inventory: **issue #6**.

## Status of this config

Budget/cost guardrails for `indoor-rocks-sandbox-01`. The original apply partially succeeded in
August 2024 and was never finished.

**Already exists in state — a plan should show these as no-ops:**

| Resource | Notes |
| --- | --- |
| `google_monitoring_notification_channel.email` | → the address in `var.notification_email` |
| `google_project_service.monitoring` | API enabled on the project |
| `google_project_service.serviceusage` | API enabled on the project |
| `google_pubsub_topic.budget_notifications` | topic `budget-notifications` |

**Declared but never created — a plan will show these as additions:**

- `google_project_iam_member.billing_user`
- `google_project_iam_member.billing_viewer`
- `google_project_iam_member.logging_config_writer`
- `google_billing_budget.budget`
- `google_logging_project_sink.budget_notifications_sink`

The likely reason it stalled: `google_billing_budget` operates on the *billing account*, not the
project, so the Terraform service account needs a role granted at billing-account level
(`roles/billing.costsManager` or similar). The `billing_user` / `billing_viewer` bindings in this
file are project-level and don't grant that. That's the thing to solve first.

## Pre-apply checklist

1. `gcloud config get-value project` → must be `indoor-rocks-sandbox-01`, **not** `z-megarepo`.
2. Recreate the gitignored files: `terraform-service-account-key.json` (see below) and a
   `terraform.tfvars` supplying `project`, `region`, `service_account_email`, `billing_account_id`,
   `notification_email`, `budget_amount` — none of which have defaults.
3. `terraform init` — provider is pinned to `hashicorp/google` 5.39.1 (2024); expect to bump it.
4. `terraform plan` — confirm the four above are no-ops. **If the plan proposes destroying them,
   stop.** Something is wrong with the state or the credentials.
5. Only then, `apply`.

## Setting up a GCP Service Account for Terraform

```bash
# From this directory...

# log in
gcloud auth login

# set the current project
gcloud config set project indoor-rocks-sandbox-01

# gcloud iam service-accounts create: The command to create a new service account.
# terraform: The name of the service account.
# --display-name "Terraform Service Account": A friendly name to help you identify the service account.
gcloud iam service-accounts create terraform --display-name "Terraform Service Account"

# gcloud projects add-iam-policy-binding: The command to modify the IAM policy for a project.
# indoor-rocks-sandbox-01: Your project ID.
# --member="serviceAccount:terraform@indoor-rocks-sandbox-01.iam.gserviceaccount.com": Specifies the service account we created earlier.
# --role="roles/editor": Grants the Editor role to the service account, which provides broad permissions for most GCP services.
gcloud projects add-iam-policy-binding indoor-rocks-sandbox-01 \
  --member="serviceAccount:terraform@indoor-rocks-sandbox-01.iam.gserviceaccount.com" \
  --role="roles/editor"

# gcloud iam service-accounts keys create: The command to create a new key for the service account.
# ~/path-to-your-service-account-key.json: The path where the key file will be saved on your local machine. You can change this to any path you prefer.
# --iam-account terraform@indoor-rocks-sandbox-01.iam.gserviceaccount.com: Specifies the service account for which the key is being created.
gcloud iam service-accounts keys create ./terraform-service-account-key.json \
  --iam-account terraform@indoor-rocks-sandbox-01.iam.gserviceaccount.com
```

## Load the terraform service account credentials

From the project root, source the newly created service-account key

```bash
export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/terraform/terraform-service-account-key.json"
```

## Create Remote Terraform state

```bash
gsutil mb -l us-east1 gs://indoor-rocks-terraform-state
```
