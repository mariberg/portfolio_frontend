import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import { CloudFrontToS3, CloudFrontToS3Props } from '@aws-solutions-constructs/aws-cloudfront-s3'

export class PortfolioFrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cloudFrontToS3: CloudFrontToS3Props = {
      cloudFrontDistributionProps: {
        certicate: 'a1f34486-a29e-49d0-bc4c-769cce718b9f', //?
        domainNames: ['marikabergman.com', 'www.marikabergman.com'],
      },

      bucketProps: {
        websiteIndexDocument: "index.html",
        publicReadAccess: true,
        // TODO: staticwebsitehosting enabled???
        //TODO region???
      }
    }

    new CloudFrontToS3(this, 'portfolio-cloudfront', cloudFrontToS3);

  }
}
