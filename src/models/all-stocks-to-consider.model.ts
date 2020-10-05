import {Entity, model, property} from '@loopback/repository';

@model()
export class AllStocksToConsider extends Entity {
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
  CompanyName: string;

  @property({
    type: 'string',
    required: true,
  })
  Industry: string;

  @property({
    type: 'string',
    required: true,
  })
  Symbol: string;

  @property({
    type: 'string',
    required: true,
  })
  Series: string;

  @property({
    type: 'string',
    required: true,
  })
  ISINCode: string;

  @property({
    type: 'string',
    required: true,
  })
  SrcIndex: string;


  constructor(data?: Partial<AllStocksToConsider>) {
    super(data);
  }
}

export interface AllStocksToConsiderRelations {
  // describe navigational properties here
}

export type AllStocksToConsiderWithRelations = AllStocksToConsider & AllStocksToConsiderRelations;
