<img width="1709" height="1067" alt="3 Tier architecture drawio" src="https://github.com/user-attachments/assets/a6c76915-083c-41c4-8a94-416e8a6535b5" />


# 3-Tier-Production-Architecture-on-AWS-Using-Terraform


This repo describes a production-ready, enterprise-grade, secure deployment of a 3-tier e-commerce application on AWS using Terraform.
The stack includes:


- Presentation Tier: React Frontend → S3 + CloudFront

- Application Tier: Node.js Backend → EC2 Auto Scaling + ALB

- Data Tier: PostgreSQL Database → Amazon RDS

- Provisioning: Terraform modular infrastructure-as-code

  

## 💡 Why This Stack

This repository demonstrates a **production-ready, secure 3-tier architecture on AWS**. Each tier and tool was chosen for scalability, security, and maintainability:

- **Frontend:** `React → S3 + CloudFront`  
  Fast, scalable static hosting with global CDN and HTTPS support.

- **Backend:** `Node.js → EC2 Auto Scaling + ALB`  
  Handles API requests securely, automatically scales across multiple availability zones.

- **Database:** `PostgreSQL → Amazon RDS`  
  Managed, highly available, and isolated in private subnets for security.

- **Provisioning:** `Terraform`  
  Infrastructure as Code for automated, repeatable, and version-controlled deployments.

**Benefits:** Secure, scalable, maintainable, and production-ready.


## 🚀 Getting Started (Clone & Run the Project)


Clone the repository
```bash
$ git clone https://github.com/rootgh-home/3-Tier-Production-Architecture-on-AWS-Using-Terraform.git
$ cd 3-Tier-Production-Architecture-on-AWS-Using-Terraform
$ cd frontend
$ npm install
$ npm run dev
```

Output:
```text
VITE v7.2.4  ready in 5145 ms
Local: http://localhost:5173/
```

<img width="1903" height="936" alt="Screenshot from 2026-01-25 10-34-54" src="https://github.com/user-attachments/assets/86d80b46-48fc-430b-aa5f-cfb4cc1ca6de" />



#### Server

```bash
$ cd backend
$ npm install
$ npm start
```

> **Note:**  
> Running the backend locally without PostgreSQL will result in a connection error.  
> This project is designed to run the backend on EC2, where it connects securely to  
> Amazon RDS within the same VPC.



Workaround: Run Backend Locally with Local PostgreSQL (Dev Only)

```bash
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib
```


-- Create database
```bash
$ CREATE DATABASE ecommerce;
```

-- Create user with password
```bash
$ CREATE USER ecommerce_user WITH PASSWORD 'password';
```

-- Grant privileges to user
```bash
$ GRANT ALL PRIVILEGES ON DATABASE ecommerce TO ecommerce_user;
```

-- Exit PostgreSQL
```bash
$ \q
```

Create backend .env
```bash
$ touch .env
```

- DB_USER=postgres
- DB_PASSWORD=******
- DB_HOST=localhost
- DB_PORT=5432
- DB_NAME=ecommerce_db
- JWT_SECRET=supersecretkey
- PORT=3000

```bash
$ npm install
$ npm start
```


## 🚀 Infrastructure Deployment (Terraform)

Apply the infrastructure
```bash
$ cd terraform
$ terraform apply
```

🔐 Database password prompt (Expected behavior)

During terraform apply, Terraform will prompt for the database password:
Acquiring state lock. This may take a few moments...

var.db_password
  Enter a value:



-  This is intentional
-  Secrets are not hardcoded in the repository
-  Aligns with Terraform & AWS security best practices

Enter a strong password when prompted.


<img width="1464" height="802" alt="terraform" src="https://github.com/user-attachments/assets/34918945-dee9-4930-bce9-32167f9ecabc" />

Review the plan and type:

  yes

Apply complete! Resources: 32 added, 0 changed, 0 destroyed.


## Architecture

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

<img width="1849" height="968" alt="Screenshot from 2025-12-25 03-45-02" src="https://github.com/user-attachments/assets/c3cab041-edb2-4c5b-8e8c-3e8745259d1e" />


## 🛠️ Debugging & Common Issues

This section documents expected behaviors, common errors, and their resolutions when running the project locally and in AWS.
