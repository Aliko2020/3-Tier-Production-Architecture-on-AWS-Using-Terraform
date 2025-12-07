
resource "aws_db_subnet_group" "this" {
  name       = "rds-subnet-group2"
  subnet_ids = var.db_subnet_ids   
  tags = {
    Name = "rds-subnet-group"
  }
}

resource "aws_db_instance" "ecommerce" {
  identifier             = "ecommercedb"
  instance_class         = "db.t3.micro"
  allocated_storage      = 5
  engine                 = "postgres"
  engine_version         = "14.12"
  username               = var.db_username
  password               = var.db_password

  db_subnet_group_name   = aws_db_subnet_group.this.name

  vpc_security_group_ids = var.rds_security_group_ids
  publicly_accessible    = false
  skip_final_snapshot    = true
  multi_az               = false
}
