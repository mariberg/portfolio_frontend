import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import { CloudFrontToS3 } from' @aws-solutions-constructs/aws-cloudfront-s3';

export class PortfolioFrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'PortfolioFrontendQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
