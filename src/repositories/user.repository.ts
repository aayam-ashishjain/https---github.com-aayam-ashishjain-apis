import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {AdsSqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.ID,
  UserRelations
> {
  constructor(
    @inject('datasources.AdsSql') dataSource: AdsSqlDataSource,
  ) {
    super(User, dataSource);
  }
}
