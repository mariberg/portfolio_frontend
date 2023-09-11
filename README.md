# Cloud Resume Challenge - Frontend for my portfolio website

This project has been created based on the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), which gives a roadmap for creating a fullstack project with AWS, with plenty of opportunities for choosing your own path along the way.

The backend for the project can be found in this [repo](https://github.com/mariberg/portfolio_backend). My deployed portfolio website is [here](https://marikabergman.com).

This diagram explains the structure of the whole fullstack project:

![Alt text](/img/diagram.png)


## Project structure

The project has been deployed on AWS. The project consists of an AWS S3 bucket and CloudFront distribution. S3 bucket has a simple index.html-file, CSS-files and app.js, which has Javascript code that calls the api. The S3 bucket has not been configured as a website and cannot be accessed directly, only through the CloudFront distribution. Amazon certificate manager has been used to create a certificate for my custom domain and to connect
it to the CloudFront distribution.

## Deployment

The project has been deployed as 'infrastructure as code' (IaC) and the tool that has been used for that is AWS CDK (Cloud development kit). This repository includes the CDK app source code. 


## CI/CD

Deployment has been automated with Github Actions workflow, which installs dependencies, configures AWS credentials with OIDC, deploys the CDK app and runs Cypress tests.
