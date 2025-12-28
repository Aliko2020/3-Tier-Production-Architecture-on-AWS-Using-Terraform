variable "region" {
  type = string
  default = "us-east-1"
}

variable "cidr_block" {
  type = string
  default = "10.0.0.0/16"
}

variable "db_username" {
  type = string
  default = "amos"
}

variable "db_password" {
  type = string
  sensitive = true
}