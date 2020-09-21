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
import {Realm} from '../models';
import {RealmRepository} from '../repositories';

export class RealmController {
  constructor(
    @repository(RealmRepository)
    public realmRepository : RealmRepository,
  ) {}

  @post('/realms', {
    responses: {
      '200': {
        description: 'Realm model instance',
        content: {'application/json': {schema: getModelSchemaRef(Realm)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realm, {
            title: 'NewRealm',
            exclude: ['ID'],
          }),
        },
      },
    })
    realm: Omit<Realm, 'ID'>,
  ): Promise<Realm> {
    return this.realmRepository.create(realm);
  }

  @get('/realms/count', {
    responses: {
      '200': {
        description: 'Realm model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Realm) where?: Where<Realm>,
  ): Promise<Count> {
    return this.realmRepository.count(where);
  }

  @get('/realms', {
    responses: {
      '200': {
        description: 'Array of Realm model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Realm, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Realm) filter?: Filter<Realm>,
  ): Promise<Realm[]> {
    return this.realmRepository.find(filter);
  }

  @patch('/realms', {
    responses: {
      '200': {
        description: 'Realm PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realm, {partial: true}),
        },
      },
    })
    realm: Realm,
    @param.where(Realm) where?: Where<Realm>,
  ): Promise<Count> {
    return this.realmRepository.updateAll(realm, where);
  }

  @get('/realms/{id}', {
    responses: {
      '200': {
        description: 'Realm model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Realm, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Realm, {exclude: 'where'}) filter?: FilterExcludingWhere<Realm>
  ): Promise<Realm> {
    return this.realmRepository.findById(id, filter);
  }

  @patch('/realms/{id}', {
    responses: {
      '204': {
        description: 'Realm PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realm, {partial: true}),
        },
      },
    })
    realm: Realm,
  ): Promise<void> {
    await this.realmRepository.updateById(id, realm);
  }

  @put('/realms/{id}', {
    responses: {
      '204': {
        description: 'Realm PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() realm: Realm,
  ): Promise<void> {
    await this.realmRepository.replaceById(id, realm);
  }

  @del('/realms/{id}', {
    responses: {
      '204': {
        description: 'Realm DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.realmRepository.deleteById(id);
  }
}
