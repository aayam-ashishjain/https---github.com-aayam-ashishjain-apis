import {DefaultCrudRepository} from '@loopback/repository';
import {AllStocksToConsider, AllStocksToConsiderRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AllStocksToConsiderRepository extends DefaultCrudRepository<
  AllStocksToConsider,
  typeof AllStocksToConsider.prototype.ID,
  AllStocksToConsiderRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(AllStocksToConsider, dataSource);
  }
}
