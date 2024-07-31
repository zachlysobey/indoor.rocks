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
