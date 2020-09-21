import {DefaultCrudRepository} from '@loopback/repository';
import {Realm, RealmRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RealmRepository extends DefaultCrudRepository<
  Realm,
  typeof Realm.prototype.ID,
  RealmRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(Realm, dataSource);
  }
}
