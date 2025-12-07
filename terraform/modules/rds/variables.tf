variable "db_username" {
  type    = string
  default = "amos"
}

variable "db_password" {
  type      = string
  sensitive = true
}

variable "db_subnet_ids" {
  type        = list(string)
  description = "Private subnets for RDS subnet group"
}

variable "rds_security_group_ids" {
  type        = list(string)
  description = "Security groups for RDS"
}
