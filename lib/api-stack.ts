import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { createTable } from './constructs/dynamo';
import { createStepfunctions } from './constructs/stepFunctions';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    createTable(this);
    createStepfunctions(this);
  }
}
