output "public_az1_id" {
  value = aws_subnet.private_az1.id
}

output "public_az2_id" {
  value = aws_subnet.private_az2.id
}

output "private_rds_az1" {
  value =  aws_subnet.private_rds_az1.id
}

output "private_rds_az2" {
  value =  aws_subnet.private_rds_az2.id
}