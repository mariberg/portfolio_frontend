# Cloud Resume Challenge - Frontend for my portfolio site

This project has been created based on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), which gives a roadmap for creating a fullstack project with AWS, with plenty of opportunities for choosing your own path along the way.

The backend of for project can be found in this repo: [https://github.com/mariberg/portfolio_backend](https://github.com/mariberg/portfolio_backend). My deployed portfolio site is [here](marikabergman.com)


## Project structure

The project has been deployed on AWS. The project consists of an AWS S3 bucket and CloudFront distribution. S3 bucket has a simple index.html-file, CSS-files and app.js, which has Javascript code that calls the api. The S3 bucket has not been configured as a website and cannot be access directly, only through the CloudFront distribution. CloudFront distribution uses a certificate *********

## Deployment

The project has been deployed as infrastructure-as-code (IaC) and the tool that has been used for that is AWS CDK (Cloud development kit). The code for CDK can be found in portfolio-frontend-stack.ts.


## CI/CD

Deployment has been automated with Github Actions workflow, installs dependencies, configures AWS credentials with OIDC, deploys CDK stack and runs Cypress tests.
