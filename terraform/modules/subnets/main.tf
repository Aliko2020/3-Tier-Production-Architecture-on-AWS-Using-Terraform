#Public subnets (MultiAZ)

resource "aws_subnet" "public_az1" {
  vpc_id     = var.vpc_id
  cidr_block = var.c_block_public_az1
  availability_zone = "${var.region}a"
  map_public_ip_on_launch = true

  tags = {
    Name = "public_subnet_az1"
  }
}

resource "aws_subnet" "public_az2" {
  vpc_id = var.vpc_id
  cidr_block = var.c_block_public_az2
  availability_zone = "${var.region}b"
  map_public_ip_on_launch = true

  tags = {
    Name = "public_subnet_az2"
  }
}


#Private subnets for for web servers

resource "aws_subnet" "private_az1" {
  vpc_id = var.vpc_id
  cidr_block = var.c_block_private_az1
  availability_zone = "${var.region}a"
  
  tags = {
    Name = "private-app-subnet-az1"
  }
}

resource "aws_subnet" "private_az2" {
  vpc_id = var.vpc_id
  cidr_block = var.c_block_private_az2
  availability_zone = "${var.region}b"
  
  tags = {
    Name = "private-app-subnet-az2"
  }
}

#Private subnets for RDS

resource "aws_subnet" "private_rds_az1" {
  vpc_id = var.vpc_id
  cidr_block = var.c_block_privateRds_az1
  availability_zone = "${var.region}a"

  tags = {
    Name = "private-db-subnet-az1"
  }
}

resource "aws_subnet" "private_rds_az2" {
  vpc_id = var.vpc_id
  cidr_block = var.c_block_privateRds_az2
  availability_zone = "${var.region}b"

  tags = {
    Name = "private-db-subnet-az2"
  }
}


resource "aws_route_table" "public_rt" {
  vpc_id = var.vpc_id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = var.gateway_id
  }

  tags = {
    Name = "public-route-table a"
  }
}

resource "aws_route_table_association" "public_az1" {
  subnet_id = aws_subnet.public_az1.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table_association" "public_az2" {
  subnet_id = aws_subnet.public_az2.id
  route_table_id = aws_route_table.public_rt.id
}


#Nat Gateway

resource "aws_eip" "nat" {
  domain = "vpc"

  tags = {
    Name = "nat-eip"
  }
}

resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public_az1.id

  tags = {
    Name = "nat-gateway"
  }
}


#Private route

resource "aws_route_table" "private" {
  vpc_id = var.vpc_id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat.id
  }

  tags = {
    Name = "private-rt"
  }
}

resource "aws_route_table_association" "private_app_az1" {
  subnet_id      = aws_subnet.private_az1.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_app_az2" {
  subnet_id      = aws_subnet.private_az2.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_db_az1" {
  subnet_id      = aws_subnet.private_rds_az1.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_db_az2" {
  subnet_id      = aws_subnet.private_rds_az2.id
  route_table_id = aws_route_table.private.id
}