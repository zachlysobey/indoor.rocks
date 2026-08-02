variable "GOOGLE_APPLICATION_CREDENTIALS" {
  description = "Path to the service account key file"
  type        = string
  default     = "./terraform-service-account-key.json"
}

variable "project" {
  description = "Google Cloud project ID"
  type        = string
}

variable "region" {
  description = "Google Cloud region"
  type        = string
}

variable "service_account_email" {
  description = "The email of the service account for Terraform"
  type        = string
}

variable "billing_account_id" {
  description = "the ID for the associated billing account"
  type        = string
}

variable "notification_email" {
  description = "The email address to send budget alerts to"
  type        = string
}

variable "budget_amount" {
  description = "The total budget amount in USD"
  type        = number
}
