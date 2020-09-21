import {Entity, model, property} from '@loopback/repository';

@model()
export class UserRealmAccess extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'number',
    required: true,
  })
  UserID: number;

  @property({
    type: 'number',
    required: true,
  })
  RealmID: number;


  constructor(data?: Partial<UserRealmAccess>) {
    super(data);
  }
}

export interface UserRealmAccessRelations {
  // describe navigational properties here
}

export type UserRealmAccessWithRelations = UserRealmAccess & UserRealmAccessRelations;
