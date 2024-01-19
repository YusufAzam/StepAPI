import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import * as fs from "fs";

const file = fs.readFileSync("lib/constructs/stateMachines/createInventory.json")
export const createStepfunctions = (scope: Construct)=>{
    new sfn.StateMachine(scope, 'Create-request-state-machine', {
        definitionBody: sfn.DefinitionBody.fromString(file.toString()),
      });
}