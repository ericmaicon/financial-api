import { GraphQLID, GraphQLString, GraphQLObjectType } from 'graphql';

const StockSchema = new GraphQLObjectType({
  name: 'Stock',
  description: 'Stock item',
  fields: {
    id: {
      type: GraphQLID,
      description: 'The id of the stock'
    },
    code: {
      type: GraphQLString,
      description: 'The code of the stock'
    },
    company: {
      type: GraphQLString,
      description: 'The stock name'
    },
    company_segment: {
      type: GraphQLString,
      description: 'The stock segment'
    },
    sector: {
      type: GraphQLString,
      description: 'The stock sector'
    },
    sub_sector: {
      type: GraphQLString,
      description: 'The stock sub sector'
    }
  }
});

export default StockSchema;
