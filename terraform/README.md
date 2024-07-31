# indoor.rocks terraform

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
