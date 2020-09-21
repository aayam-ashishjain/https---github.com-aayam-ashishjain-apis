import {DefaultCrudRepository} from '@loopback/repository';
import {Sector, SectorRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SectorRepository extends DefaultCrudRepository<
  Sector,
  typeof Sector.prototype.ID,
  SectorRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(Sector, dataSource);
  }
}
