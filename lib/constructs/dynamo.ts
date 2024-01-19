import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';



export const createTable = (scope: Construct)=> {
    const table = new dynamodb.Table(scope, 'PlayerTable', {
        tableName: 'playerTable',
        partitionKey: {
          name: 'playerId',
          type: dynamodb.AttributeType.STRING,
        },
        sortKey: {
          name: 'entity',
          type: dynamodb.AttributeType.STRING,  
        },
      });

      return table;
}

