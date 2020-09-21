import {DefaultCrudRepository} from '@loopback/repository';
import {Stock, StockRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StockRepository extends DefaultCrudRepository<
  Stock,
  typeof Stock.prototype.ID,
  StockRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(Stock, dataSource);
  }
}
