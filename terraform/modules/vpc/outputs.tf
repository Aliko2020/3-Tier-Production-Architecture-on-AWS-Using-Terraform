output "vpc_id" {
  value = aws_vpc.main.id
}

output "main_igw_id" {
  value = aws_internet_gateway.main_igw.id
}