# 3-Tier-Production-Architecture-on-AWS-Using-Terraform

This repo describes a production-ready, enterprise-grade, secure deployment of a 3-tier e-commerce application on AWS using Terraform.
The stack includes:

- Presentation Tier: React Frontend → S3 + CloudFront

- Application Tier: Node.js Backend → EC2 Auto Scaling + ALB

- Data Tier: PostgreSQL Database → Amazon RDS

- Provisioning: Terraform modular infrastructure-as-code

### High-Level Architecture

<img width="1709" height="1067" alt="3 Tier architecture drawio" src="https://github.com/user-attachments/assets/a6c76915-083c-41c4-8a94-416e8a6535b5" />

