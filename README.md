# Cloud-Hosted Personal Website 
Welcome to my Cloud-Hosted Personal Website Project! This repository houses the code for my personal website, developed as part of the Cloud Resume Challenge. Through this project, I've utilized various cloud services and technologies to build an interactive and dynamic portfolio showcasing my skills, experience, and projects.

## Cloud Architecture Diagram

## Tech Stack
- **Languages:**
  - Javascript
  - HTML/CSS
    
- **AWS Services:**
  - AWS Route 53: Website domain registration and DNS management.
  - AWS Certificate Manager: Website SSL certificate provisioning and management.
  - AWS CloudFront: Content delivery network for fast and secure website content delivery.
  - AWS DynamoDB: NoSQL database for storing user visits to the website.
  - AWS SES (Simple Email Service): For automatic emailing to my inbox triggered by website contact form submission.
  - AWS Lambda (Python SDK; Boto3): Serverless functions written using the AWS Python SDK for emailing on form submission, incrementing, and fetching visits.
  - AWS API Gateway: For creating, publishing, maintaining, monitoring, and securing REST APIs that trigger lambda functions.
    
- **DevOps Tooling:**
  - GitHub Actions: CI/CD pipelines for automating S3 deployments for the frontend, and terraform deployments for the backend. (NOTE: IN PROGRESS)
  - Terraform: Infrastructure as code for provisioning and managing AWS resources on the backend. (NOTE: IN PROGRESS)

## Credits
This project was inspired by the Cloud Resume Challenge, an initiative created by [Forrest Brazeal](https://forrestbrazeal.com/) and documented at [cloudresumechallenge.dev](https://cloudresumechallenge.dev/). The challenge aims to help individuals demonstrate their cloud computing and DevOps skills through practical projects. I would like to extend my gratitude to Forrest Brazeal for creating this challenge and providing valuable resources to the community.

## License
    Copyright [2024] [Larry La]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.



