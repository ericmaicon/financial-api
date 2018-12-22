import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import Stock from './Stock';
import { getStocks, importStocks } from '../repositories/stock';

const query = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    stocks: {
      type: new GraphQLList(Stock),
      resolve: getStocks
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root mutation type',
  fields: {
    importStocks: {
      type: new GraphQLList(Stock),
      args: {
        url: {
          type: new GraphQLNonNull(GraphQLString),
          description: 'The url from xlsx to be imported'
        }
      },
      resolve: (_, args) => importStocks()
    }
  }
});

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
