import { DynamoDB } from 'aws-sdk';

const IS_OFFLINE = process.env.IS_OFFLINE;
const DYNAMO_DB = Symbol.for('financeiro.dynamo.db');
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasDynamoDB = globalSymbols.indexOf(DYNAMO_DB) > -1;

//https://derickbailey.com/2016/03/09/creating-a-true-singleton-in-node-js-with-es6-symbols/
if (!hasDynamoDB) {
  console.log('connected to dynamo');
  let dynamoDb;
  if (IS_OFFLINE === 'true') {
    dynamoDb = new DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    });
  } else {
    dynamoDb = new DynamoDB.DocumentClient();
  }
  global[DYNAMO_DB] = dynamoDb;
}

const dynamoSingleton = {};
Object.defineProperty(dynamoSingleton, 'instance', {
  get: function() {
    return global[DYNAMO_DB];
  }
});

Object.freeze(dynamoSingleton);
export default dynamoSingleton;
