# Full-Stack E-Commerce Application with 3-Tier Cloud Architecture on AWS

Developed and containerized a full-stack e-commerce application using Docker, deployed on AWS with EC2 Auto Scaling, RDS PostgreSQL, CloudFront CDN, and Terraform-based infrastructure automation.

## Project Structure

- **Frontend** – React-based client application  
- **Backend** – Node.js + Express authentication API  
- **Database** – PostgreSQL (running in Docker)  
- **Terraform** – Infrastructure as code scripts to provision AWS resources  
- **Docker Compose** – Orchestrates frontend, backend, and database containers locally


## Prerequisites

Before running the project, ensure you have:

- Docker installed on your machine  
- Docker Compose installed  
- Access to an AWS account (for pushing images to ECR)  
- Basic knowledge of Docker commands  



## Setup and Usage

### Clone the repo

```bash
git clone https://github.com/Aliko2020/3-Tier-Production-Architecture-on-AWS-Using-Terraform.git
```

### Build the Images

```bash
docker compose up --build
```
<img width="1669" height="590" alt="Screenshot from 2026-02-13 13-30-44" src="https://github.com/user-attachments/assets/08f48e42-6907-4cc7-92a6-bd0ace3ff1f9" />

### Access the App

```bash
http://localhost:8080/
```


### API Status Response

```bash
http://localhost:3000/
```

```json
{
  "name": "3-Tier Production API",
  "status": "running",
  "version": "v1",
  "baseUrl": "/api/v1",
  "endpoints": {
    "auth": {
      "register": "POST /api/v1/auth/register",
      "login": "POST /api/v1/auth/login",
      "profile": "GET /api/v1/auth/me",
      "verify": "GET /api/v1/auth/verify"
    }
  },
  "timestamp": "2026-02-13T13:37:38.219Z"
}
