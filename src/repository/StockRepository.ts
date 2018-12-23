import { EntityRepository, AbstractRepository } from 'typeorm';

import Stock from '../entity/Stock';

@EntityRepository(Stock)
export default class StockRepository extends AbstractRepository<Stock> {
  search = async () => {
    const items: Array<Stock> = await this.createQueryBuilder('stock').getMany();
    return items;
  };
}
