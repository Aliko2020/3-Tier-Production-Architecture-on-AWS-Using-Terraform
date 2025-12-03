# 3-Tier-Production-Architecture-on-AWS-Using-Terraform

This repo describes a production-ready, enterprise-grade, secure deployment of a 3-tier e-commerce application on AWS using Terraform.
The stack includes:

- Presentation Tier: React Frontend → S3 + CloudFront

- Application Tier: Node.js Backend → EC2 Auto Scaling + ALB

- Data Tier: PostgreSQL Database → Amazon RDS

- Provisioning: Terraform modular infrastructure-as-code

