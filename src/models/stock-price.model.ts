import {Entity, model, property} from '@loopback/repository';

@model()
export class StockPrice extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'date',
    required: true,
  })
  RecordDate: string;

  @property({
    type: 'number',
    required: true,
  })
  StockID: number;

  @property({
    type: 'number',
    required: true,
  })
  Price: number;

  @property({
    type: 'number',
    required: false,
  })
  PE: number;

  @property({
    type: 'number',
    required: false,
  })
  MarketCap: number;

  @property({
    type: 'number',
    required: false,
  })
  TradedQty: number;

  constructor(data?: Partial<StockPrice>) {
    super(data);
  }
}

export interface StockPriceRelations {
  // describe navigational properties here
}

export type StockPriceWithRelations = StockPrice & StockPriceRelations;
