# Launch Template
resource "aws_launch_template" "app_lt" {
  name_prefix   = "app-lt"
  image_id      = var.app_ami
  instance_type = var.instance_type

  network_interfaces {
    security_groups = var.app_tier_sg
    associate_public_ip_address = false
  }

  user_data = base64encode(var.user_data)
}


# Target group
resource "aws_lb_target_group" "app_tg" {
  name     = "app-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = var.vpc_id

  health_check {
    path                = "/"
    interval            = 30
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }
}


#Auto scaling across 2AZ
resource "aws_autoscaling_group" "app_asg" {
  name                      = "app-asg"
  max_size                  = 4
  min_size                  = 2
  desired_capacity          = 2

  vpc_zone_identifier = [
    var.private_subnet_az1,
    var.private_subnet_az2
  ]

  target_group_arns = [
    aws_lb_target_group.app_tg.arn
  ]

  launch_template {
    id      = aws_launch_template.app_lt.id
    version = aws_launch_template.app_lt.latest_version
  }

  health_check_type = "ELB"
  health_check_grace_period = 120

  tag {
    key                 = "Name"
    value               = "app-server"
    propagate_at_launch = true
  }
}
