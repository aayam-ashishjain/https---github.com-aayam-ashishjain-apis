import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'string',
    required: true,
  })
  Password: string;

  @property({
    type: 'string',
    required: true,
  })
  FirstName: string;

  @property({
    type: 'string',
    required: true,
  })
  LastName: string;

  @property({
    type: 'number',
    default: 1,
  })
  isActive?: number;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
