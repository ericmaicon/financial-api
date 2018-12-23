import { ApolloServer } from 'apollo-server-lambda';
import * as dotenv from 'dotenv';
import { Handler, Context, Callback } from 'aws-lambda';
import { createConnection } from 'typeorm';

import schema from './schemas';

dotenv.config({
  path: `${__dirname}/../.env`
});

interface HelloResponse {
  statusCode: number;
  body: string;
}

const server: Handler = (event: any, context: Context, callback: Callback) => {
  createConnection().then(() => {
    const server = new ApolloServer({ schema });
    const handler = server.createHandler();
    return handler(event, context, callback);
  });
};

export { server };
