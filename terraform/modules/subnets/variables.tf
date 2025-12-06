variable "region" {
  type = string
  default = "us-east-1"
}

variable "vpc_id" {
  type = string
}

variable "cidr_block" {
  type = string
  default = "10.0.0.0/16"
}

variable "c_block_public_az1" {
  type = string
  default = "10.0.1.0/24"
}

variable "c_block_public_az2" {
  type = string
  default = "10.0.2.0/24"
}

variable "c_block_private_az1" {
  type = string
  default = "10.0.10.0/24"
}

variable "c_block_private_az2" {
  type = string
  default = "10.0.11.0/24"
}

variable "c_block_privateRds_az1" {
  type = string
  default = "10.0.20.0/24"
}

variable "c_block_privateRds_az2" {
  type = string
  default = "10.0.21.0/24"
}

variable "gateway_id" {
  type = string
}