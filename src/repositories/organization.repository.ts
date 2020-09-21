import {DefaultCrudRepository} from '@loopback/repository';
import {Organization, OrganizationRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrganizationRepository extends DefaultCrudRepository<
  Organization,
  typeof Organization.prototype.ID,
  OrganizationRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(Organization, dataSource);
  }
}
