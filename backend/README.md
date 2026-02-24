# Backend API

A REST API built with Node.js, Express, and PostgreSQL, designed as the application layer of a 3-Tier Architecture deployed on AWS.

This API handles user authentication and provides system-level health and metadata endpoints.


## Features

- User registration and login
- Health check and API info endpoints
- PostgreSQL integration

## Tech Stack

- Runtime: Node.js (>=18)
- Framework: Express.js
- Database: PostgreSQL (>=12)
- Authentication: JWT (JSON Web Tokens)
- Hashing: bcrypt
- Environment Management: dotenv


## Installation

1. **Clone the repository**  

```bash
git clone https://github.com/Aliko2020/3-Tier-Production-Architecture-on-AWS-Using-Terraform.git
cd backend
```

2. **Install Dependencies** 

```bash
npm install
```

3. **Configure Environment Variables** 
Create a .env file:
