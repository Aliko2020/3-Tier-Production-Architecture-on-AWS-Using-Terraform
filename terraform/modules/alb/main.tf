resource "aws_lb" "app_alb" {
  name               = var.alb_name
  load_balancer_type = var.lb_type
  internal           = var.internal 

  subnets = [
    var.public_az1_id,
    var.public_az2_id
  ]

  security_groups = [
    var.alb_sg
  ]
}
