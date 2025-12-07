provider "aws" {
  region = var.region
}

module "vpc" {
  source     = "./modules/vpc"
  cidr_block = var.cidr_block
}

module "security_groups" {
  source = "./modules/security-groups"

  vpc_id = module.vpc.vpc_id
}

module "subnets" {
  source = "./modules/subnets"

  vpc_id     = module.vpc.vpc_id
  gateway_id = module.vpc.main_igw_id
}

# module "alb" {
#   source = "./modules/alb"
#   alb_sg = module.security_groups.app_alb_sg.id
#   public_az1_id = module.subnets.public_az1_id
#   public_az2_id = module.subnets.public_az2_id
# }

module "rds_setup" {
  source = "./modules/rds"

  db_subnet_ids = [
    module.subnets.private_rds_az1,
    module.subnets.private_rds_az2
  ]
  
  rds_security_group_ids = [module.security_groups.db_tier_sg.id]
  db_username            = var.db_username
  db_password            = var.db_password
}



module "app_ec2" {
  source = "./modules/ec2"

  app_ami       = "ami-0ecb62995f68bb549"
  instance_type = "t3.micro"
  vpc_id        = module.vpc.vpc_id

  private_subnet_az1 = module.subnets.public_az1_id
  private_subnet_az2 = module.subnets.public_az2_id

  app_tier_sg = [module.security_groups.app_tier_sg.id]

  user_data = templatefile("${path.module}/scripts/userdata.sh", {
    db_endpoint = module.rds_setup.db_endpoint
    db_port     = module.rds_setup.db_port
    db_name     = "ecommerce"
    db_user     = var.db_username
    db_pass     = var.db_password
  })
}
