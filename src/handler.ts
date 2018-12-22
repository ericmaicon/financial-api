import { ApolloServer } from 'apollo-server-lambda';

import schema from './schemas';

const server = new ApolloServer({ schema });
exports.server = server.createHandler();
