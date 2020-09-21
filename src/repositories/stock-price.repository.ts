import {DefaultCrudRepository} from '@loopback/repository';
import {StockPrice, StockPriceRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StockPriceRepository extends DefaultCrudRepository<
  StockPrice,
  typeof StockPrice.prototype.ID,
  StockPriceRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(StockPrice, dataSource);
  }
}
