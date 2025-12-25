# 3-Tier-Production-Architecture-on-AWS-Using-Terraform

This repo describes a production-ready, enterprise-grade, secure deployment of a 3-tier e-commerce application on AWS using Terraform.
The stack includes:

- Presentation Tier: React Frontend → S3 + CloudFront

- Application Tier: Node.js Backend → EC2 Auto Scaling + ALB

- Data Tier: PostgreSQL Database → Amazon RDS

- Provisioning: Terraform modular infrastructure-as-code

### Architecture

<img width="1709" height="1067" alt="3 Tier architecture drawio" src="https://github.com/user-attachments/assets/a6c76915-083c-41c4-8a94-416e8a6535b5" />

### Network Setup(VPC,SUBNETS,ROUTE TABLES)

- VPC Custom VPC: deployed in two AZs
- Public Subnets: Hosts NAT Gateway and ALB
- Private App Subnets: EC2 application tier, routed to NAT gateway for outbound access
- Private DB Subnets: RDS subnets, isolated with no internet access
- IGW: Provides internet connectivity for public subnets
- NAT Gateway: Allows outbound internet access for private app subnets
- Route Tables: Separate route tables for each tier
  
---

Public Route Table
- Used by both public subnets.
- 0.0.0.0/0 → Internet Gateway
Allows inbound/outbound internet connectivity.


Private App Route Table
- Used by both private app subnets.
- 0.0.0.0/0 → NAT Gateway
Provides outbound-only internet access for EC2 instances.

---

Private DB Route Table
- Used by private DB subnets.
- - (No internet routes)
DB subnets are fully isolated as recommended for RDS/Aurora.

<img width="1631" height="595" alt="Screenshot from 2025-12-06 15-41-48" src="https://github.com/user-attachments/assets/16dc9f8e-9b26-4079-b5ed-9df8ecf30009" />

#### Deployment Notes

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
- (No internet routes)
DB subnets are fully isolated as recommended for RDS/Aurora.

### Application Tier: EC2 Deployment

The Application Tier consists of Node.js backend servers running on EC2 instances managed by Auto Scaling Groups (ASG) and fronted by an Application Load Balancer (ALB). Terraform provisions these instances in private subnets for security, with access via SSM Session Manager.

<img width="1848" height="888" alt="Screenshot from 2025-12-25 00-46-13" src="https://github.com/user-attachments/assets/ee47838b-c111-450b-bbd8-724f5c2a6ffe" />


#### EC2 Instance Details

- AMI: Ubuntu 24.04 (ami-0ecb62995f68bb549)
- Instance Type: t2.micro (configurable via Terraform variable instance_type)
- IAM Role: EC2SessionManagerRole with the following policies:
- AmazonSSMManagedInstanceCore → enables Session Manager access
- User Data: Installs Node.js, Git, and required dependencies,Configures environment variables (.env) for RDS connection

#### Auto Scaling & Load Balancing

-Auto Scaling Group (ASG): Min: 2, Max: 4, Desired: 2 instances
- Spans two private subnets across different Availability Zones
- Health checks integrated with the ALB (ELB type)

#### Application Load Balancer (ALB):

- Deployed in public subnets
- Routes HTTP/HTTPS traffic to EC2 instances in private subnets
- Security groups restrict access:
- ALB SG: allows HTTP/HTTPS from anywhere
- App SG: allows only traffic from ALB

#### Session Manager Access

- EC2 instances do not require public IPs.
- Access via AWS Systems Manager Session Manager:
