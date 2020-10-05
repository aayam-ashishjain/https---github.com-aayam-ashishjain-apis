import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {AllStocksToConsider} from '../models';
import {AllStocksToConsiderRepository} from '../repositories';

export class AllRawStocksController {
  constructor(
    @repository(AllStocksToConsiderRepository)
    public allStocksToConsiderRepository : AllStocksToConsiderRepository,
  ) {}

  @post('/StocksToConsider', {
    responses: {
      '200': {
        description: 'AllStocksToConsider model instance',
        content: {'application/json': {schema: getModelSchemaRef(AllStocksToConsider)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AllStocksToConsider, {
            title: 'NewAllStocksToConsider',
            exclude: ['ID'],
          }),
        },
      },
    })
    allStocksToConsider: Omit<AllStocksToConsider, 'ID'>,
  ): Promise<AllStocksToConsider> {
    return this.allStocksToConsiderRepository.create(allStocksToConsider);
  }

  @get('/StocksToConsider/count', {
    responses: {
      '200': {
        description: 'AllStocksToConsider model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AllStocksToConsider) where?: Where<AllStocksToConsider>,
  ): Promise<Count> {
    return this.allStocksToConsiderRepository.count(where);
  }

  @get('/StocksToConsider', {
    responses: {
      '200': {
        description: 'Array of AllStocksToConsider model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AllStocksToConsider, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AllStocksToConsider) filter?: Filter<AllStocksToConsider>,
  ): Promise<AllStocksToConsider[]> {
    return this.allStocksToConsiderRepository.find(filter);
  }

  @patch('/StocksToConsider', {
    responses: {
      '200': {
        description: 'AllStocksToConsider PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AllStocksToConsider, {partial: true}),
        },
      },
    })
    allStocksToConsider: AllStocksToConsider,
    @param.where(AllStocksToConsider) where?: Where<AllStocksToConsider>,
  ): Promise<Count> {
    return this.allStocksToConsiderRepository.updateAll(allStocksToConsider, where);
  }

  @get('/StocksToConsider/{id}', {
    responses: {
      '200': {
        description: 'AllStocksToConsider model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AllStocksToConsider, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AllStocksToConsider, {exclude: 'where'}) filter?: FilterExcludingWhere<AllStocksToConsider>
  ): Promise<AllStocksToConsider> {
    return this.allStocksToConsiderRepository.findById(id, filter);
  }

  @patch('/StocksToConsider/{id}', {
    responses: {
      '204': {
        description: 'AllStocksToConsider PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AllStocksToConsider, {partial: true}),
        },
      },
    })
    allStocksToConsider: AllStocksToConsider,
  ): Promise<void> {
    await this.allStocksToConsiderRepository.updateById(id, allStocksToConsider);
  }

  @put('/StocksToConsider/{id}', {
    responses: {
      '204': {
        description: 'AllStocksToConsider PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() allStocksToConsider: AllStocksToConsider,
  ): Promise<void> {
    await this.allStocksToConsiderRepository.replaceById(id, allStocksToConsider);
  }

  @del('/StocksToConsider/{id}', {
    responses: {
      '204': {
        description: 'AllStocksToConsider DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.allStocksToConsiderRepository.deleteById(id);
  }
}
