import { ApolloServer } from 'apollo-server-lambda';
import * as dotenv from 'dotenv';
import { Handler, Context, Callback } from 'aws-lambda';

import schema from './schema';
import ConnectionManager from './component/db/ConnectionManager';

dotenv.config({
  path: `${__dirname}/../.env`
});

const server: Handler = (event: any, context: Context, callback: Callback) => {
  const managment = new ConnectionManager();
  managment.getConnection().then(() => {
    const server = new ApolloServer({ schema });
    const handler = server.createHandler();
    return handler(event, context, callback);
  });
};

export { server };
