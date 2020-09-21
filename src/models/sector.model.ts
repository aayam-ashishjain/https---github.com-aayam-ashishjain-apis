import {Entity, model, property} from '@loopback/repository';

@model()
export class Sector extends Entity {
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
  Name: string;

  @property({
    type: 'number',
    required: true,
  })
  Weight: number;


  constructor(data?: Partial<Sector>) {
    super(data);
  }
}

export interface SectorRelations {
  // describe navigational properties here
}

export type SectorWithRelations = Sector & SectorRelations;
