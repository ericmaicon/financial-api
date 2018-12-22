import { DynamoDB } from 'aws-sdk';

const IS_OFFLINE = process.env.IS_OFFLINE;
let dynamoDb;
if (IS_OFFLINE === 'true') {
  dynamoDb = new DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  });
} else {
  dynamoDb = new DynamoDB.DocumentClient();
}

const getStocks = () => {
  return new Promise((resolve, reject) => {
    dynamoDb.scan(
      {
        TableName: 'stock',
        ProjectionExpression: 'id, code, company, company_segment, sector, sub_sector'
      },
      (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data.Items);
        }
      }
    );
  });
};

export default getStocks;
