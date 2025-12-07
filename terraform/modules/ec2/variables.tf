variable "vpc_id" {
  type = string
}

variable "app_ami" {
  type = string
  description = "ec2 instance (Ubuntu) ami"
}

variable "instance_type" {
  type    = string
  description = "ec2 instance type"
}

variable "private_subnet_az1" {
    type = string
}

variable "private_subnet_az2" {
    type = string
}

variable "app_tier_sg" {
  type = list(string)
}

variable "user_data" {
  type = string
}
