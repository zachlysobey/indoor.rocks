terraform {
  backend "gcs" {
    bucket = "indoor-rocks-terraform-state"
    prefix = "terraform/state"
  }
}

provider "google" {
  credentials = file(var.GOOGLE_APPLICATION_CREDENTIALS)
  project     = var.project
  region      = var.region
}

resource "google_project_iam_member" "billing_user" {
  project = var.project
  role    = "roles/billing.user"
  member  = "serviceAccount:${var.service_account_email}"
}

resource "google_project_iam_member" "billing_viewer" {
  project = var.project
  role    = "roles/billing.viewer"
  member  = "serviceAccount:${var.service_account_email}"
}

resource "google_project_iam_member" "logging_config_writer" {
  project = var.project
  role    = "roles/logging.configWriter"
  member  = "serviceAccount:${var.service_account_email}"
}

resource "google_project_service" "serviceusage" {
  project = var.project
  service = "serviceusage.googleapis.com"
}

resource "google_project_service" "monitoring" {
  project = var.project
  service = "monitoring.googleapis.com"
}

resource "google_billing_budget" "budget" {
  billing_account = var.billing_account_id
  display_name    = "Monthly Budget"

  amount {
    specified_amount {
      currency_code = "USD"
      units         = var.budget_amount
    }
  }

  threshold_rules {
    threshold_percent = 0.50
  }

  threshold_rules {
    threshold_percent = 0.90
  }

  threshold_rules {
    threshold_percent = 1.00
  }
}

resource "google_pubsub_topic" "budget_notifications" {
  name = "budget-notifications"
}

resource "google_monitoring_notification_channel" "email" {
  display_name = "Email Alert"
  type         = "email"
  labels = {
    email_address = var.notification_email
  }
}

resource "google_logging_project_sink" "budget_notifications_sink" {
  name        = "budget-notifications-sink"
  destination = google_pubsub_topic.budget_notifications.id
  filter      = "resource.type=\"billing_account\" AND protoPayload.methodName=\"UpdateBudget\""
}
