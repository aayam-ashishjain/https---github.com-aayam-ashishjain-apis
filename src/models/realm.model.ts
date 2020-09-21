import {Entity, model, property} from '@loopback/repository';

@model()
export class Realm extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;


  constructor(data?: Partial<Realm>) {
    super(data);
  }
}

export interface RealmRelations {
  // describe navigational properties here
}

export type RealmWithRelations = Realm & RealmRelations;
