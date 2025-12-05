variable "public_az1_id" {
  type = string
}

variable "public_az2_id" {
  type = string
}

variable "alb_name" {
  type = string
  default = "app-alb"
}

variable "lb_type" {
  type = string
  default = "application"
}

variable "internal" {
  type = bool
  default = false
}

variable "alb_sg" {
  type = string
}