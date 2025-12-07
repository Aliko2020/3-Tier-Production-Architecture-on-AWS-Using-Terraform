# 3-Tier-Production-Architecture-on-AWS-Using-Terraform

This repo describes a production-ready, enterprise-grade, secure deployment of a 3-tier e-commerce application on AWS using Terraform.
The stack includes:

- Presentation Tier: React Frontend → S3 + CloudFront

- Application Tier: Node.js Backend → EC2 Auto Scaling + ALB

- Data Tier: PostgreSQL Database → Amazon RDS

- Provisioning: Terraform modular infrastructure-as-code

### High-Level Architecture

<img width="1709" height="1067" alt="3 Tier architecture drawio" src="https://github.com/user-attachments/assets/a6c76915-083c-41c4-8a94-416e8a6535b5" />

### Network Setup(VPC,SUBNETS,ROUTE TABLES)

- VPC Custom VPC: deployed in two AZs
- Public Subnets: Hosts NAT Gateway and ALB
- Private App Subnets: EC2 application tier, routed to NAT gateway for outbound access
- Private DB Subnets: RDS subnets, isolated with no internet access
- IGW: Provides internet connectivity for public subnets
- NAT Gateway: Allows outbound internet access for private app subnets
- Route Tables: Separate route tables for each tier

Public Route Table
- Used by both public subnets.
- - 0.0.0.0/0 → Internet Gateway
Allows inbound/outbound internet connectivity.


Private App Route Table
- Used by both private app subnets.
- -0.0.0.0/0 → NAT Gateway
Provides outbound-only internet access for EC2 instances.

Private DB Route Table
- Used by private DB subnets.
- - (No internet routes)
DB subnets are fully isolated as recommended for RDS/Aurora.


### Deployment Notes

- EC2 instances are launched in private subnets, and access is typically via SSM Session Manager.
- user-data scripts automatically install Node.js, Git, and environment configuration on app EC2 instances.
- The backend .env file contains RDS connection info (DB_HOST, DB_PORT, DB_USER, DB_PASS).
- Auto Scaling ensures high availability across two AZs.

---

Security Best Practices

- DB subnets are fully private, no public access.
- App subnets are private, routed via NAT for outbound traffic only.
- ALB handles inbound traffic securely; security groups enforce tier-to-tier access.

---

[CloudFront] → [ALB] → [EC2 Auto Scaling] → [RDS PostgreSQL]

- Public subnets: ALB, NAT Gateway
- Private app subnets: EC2 backend
- Private DB subnets: RDS