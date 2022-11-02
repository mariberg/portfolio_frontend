import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3'; 
import * as acm from 'aws-cdk-lib/aws-certificatemanager'; 
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'; 
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'; 
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins'; 
import * as iam from 'aws-cdk-lib/aws-iam';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as path from "path";

export class PortfolioFrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ACMCertificate = acm.Certificate.fromCertificateArn(this, 'Certificate', 'arn:aws:acm:us-east-1:696551956218:certificate/a1f34486-a29e-49d0-bc4c-769cce718b9f');


    const portfolioBucket = new s3.Bucket(this, 'bucket', {
      //websiteIndexDocument: 'index.html', **removed as this should be regular s3 bucket that is accessed through CloudFront
      publicReadAccess: false, 
    })


    const OAI = new cloudfront.OriginAccessIdentity(this, 'portfolio_OAI', {
      comment: 'comment'
    }
    );

    const distribution = new cloudfront.Distribution(this, 'distribution', { 
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(portfolioBucket), 
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS, 
      },
      defaultRootObject: "index.html", 
      domainNames: [
        'marikabergman.com',
        'www.marikabergman.com'
      ],
      certificate: ACMCertificate,
      errorResponses:[
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(10),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(10),
        }
      ],
    })

    portfolioBucket.addToResourcePolicy(new iam.PolicyStatement({ 
      actions: ['s3:GetObject'],
      resources: [portfolioBucket.arnForObjects('*')],
      principals: [new iam.CanonicalUserPrincipal(OAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)] 
     })
    )

    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [
        s3deploy.Source.asset(path.resolve(__dirname, '../site-contents'))
    ],
      destinationBucket: portfolioBucket,
      distribution, // files in the distribution's edge caches will be invalidated after files are uploaded to the destination bucket
      distributionPaths: ['/*'],
    })

  }
  
}
