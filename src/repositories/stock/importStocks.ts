import { connect } from '../dynamo';

import data from '@data/companies.json';

const importStocks = () => {
  console.log(data);
};

export default importStocks;
