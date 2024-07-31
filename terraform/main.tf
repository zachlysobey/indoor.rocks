terraform {
  backend "gcs" {
    bucket  = "indoor-rocks-terraform-state"
    prefix  = "terraform/state"
  }
}

provider "google" {
  credentials = file(var.GOOGLE_APPLICATION_CREDENTIALS)
  project     = var.project
  region      = var.region
}
