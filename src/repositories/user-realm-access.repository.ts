import {DefaultCrudRepository} from '@loopback/repository';
import {UserRealmAccess, UserRealmAccessRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRealmAccessRepository extends DefaultCrudRepository<
  UserRealmAccess,
  typeof UserRealmAccess.prototype.ID,
  UserRealmAccessRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(UserRealmAccess, dataSource);
  }
}
