output "rds_hostname" {
  description = "RDS instance hostname"
  value       = aws_db_instance.ecommerce.address
  sensitive   = true
}

output "rds_username" {
  description = "RDS instance root username"
  value       = aws_db_instance.ecommerce.username
  sensitive   = true
}



output "db_endpoint" {
  description = "The endpoint of the RDS instance"
  value       = aws_db_instance.ecommerce.address
}

output "db_port" {
  description = "The port the RDS instance is listening on"
  value       = aws_db_instance.ecommerce.port
}
