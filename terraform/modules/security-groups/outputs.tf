output "app_alb_sg" {
  value = aws_security_group.alb_sg

}

output "app_tier_sg" {
  value = aws_security_group.app_tier_sg
}

output "db_tier_sg" {
  value = aws_security_group.db_tier_sg
}