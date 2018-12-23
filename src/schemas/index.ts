import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';
import { getCustomRepository } from 'typeorm';

import StockRepository from '../repository/StockRepository';
import StockSchema from './StockSchema';

const query = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    stocks: {
      type: new GraphQLList(StockSchema),
      resolve: () => {
        const stockRepository = getCustomRepository(StockRepository);
        return stockRepository.search();
      }
    }
  }
});

// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   description: 'The root mutation type',
//   fields: {
//     importStocks: {
//       type: new GraphQLList(Stock),
//       args: {
//         url: {
//           type: new GraphQLNonNull(GraphQLString),
//           description: 'The url from xlsx to be imported'
//         }
//       },
//       resolve: (_, args) => importStocks()
//     }
//   }
// });

const schema = new GraphQLSchema({
  query
  // mutation
});

export default schema;
