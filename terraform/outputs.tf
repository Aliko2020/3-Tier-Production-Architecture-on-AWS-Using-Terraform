output "vpc_id" {
  value = module.vpc.vpc_id
}

output "public_az1_id" {
  value = module.subnets.public_az1_id
}

output "public_az2_id" {
  value = module.subnets.public_az2_id
}

output "app_alb_sg" {
  value = module.security_groups.app_alb_sg
}

output "app_tier_sg" {
  value = module.security_groups.app_tier_sg.id
}

output "db_tier_sg" {
  value = module.security_groups.db_tier_sg.id
}
