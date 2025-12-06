provider "aws" {
  region = var.region
}

module "vpc" {
  source = "./modules/vpc"
  cidr_block = var.cidr_block
}

module "security_groups" {
  source = "./modules/security-groups"
  vpc_id = module.vpc.vpc_id
}

module "subnets" {
  source = "./modules/subnets"
  vpc_id = module.vpc.vpc_id
  gateway_id = module.vpc.main_igw_id
}

# module "alb" {
#   source = "./modules/alb"
#   alb_sg = module.security_groups.app_alb_sg.id
#   public_az1_id = module.subnets.public_az1_id
#   public_az2_id = module.subnets.public_az2_id
# }