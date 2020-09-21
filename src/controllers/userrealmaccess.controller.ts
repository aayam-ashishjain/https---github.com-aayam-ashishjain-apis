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
import {UserRealmAccess} from '../models';
import {UserRealmAccessRepository} from '../repositories';

export class UserrealmaccessController {
  constructor(
    @repository(UserRealmAccessRepository)
    public userRealmAccessRepository : UserRealmAccessRepository,
  ) {}

  @post('/user-realm-accesses', {
    responses: {
      '200': {
        description: 'UserRealmAccess model instance',
        content: {'application/json': {schema: getModelSchemaRef(UserRealmAccess)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserRealmAccess, {
            title: 'NewUserRealmAccess',
            exclude: ['ID'],
          }),
        },
      },
    })
    userRealmAccess: Omit<UserRealmAccess, 'ID'>,
  ): Promise<UserRealmAccess> {
    return this.userRealmAccessRepository.create(userRealmAccess);
  }

  @get('/user-realm-accesses/count', {
    responses: {
      '200': {
        description: 'UserRealmAccess model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(UserRealmAccess) where?: Where<UserRealmAccess>,
  ): Promise<Count> {
    return this.userRealmAccessRepository.count(where);
  }

  @get('/user-realm-accesses', {
    responses: {
      '200': {
        description: 'Array of UserRealmAccess model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(UserRealmAccess, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(UserRealmAccess) filter?: Filter<UserRealmAccess>,
  ): Promise<UserRealmAccess[]> {
    return this.userRealmAccessRepository.find(filter);
  }

  @patch('/user-realm-accesses', {
    responses: {
      '200': {
        description: 'UserRealmAccess PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserRealmAccess, {partial: true}),
        },
      },
    })
    userRealmAccess: UserRealmAccess,
    @param.where(UserRealmAccess) where?: Where<UserRealmAccess>,
  ): Promise<Count> {
    return this.userRealmAccessRepository.updateAll(userRealmAccess, where);
  }

  @get('/user-realm-accesses/{id}', {
    responses: {
      '200': {
        description: 'UserRealmAccess model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(UserRealmAccess, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UserRealmAccess, {exclude: 'where'}) filter?: FilterExcludingWhere<UserRealmAccess>
  ): Promise<UserRealmAccess> {
    return this.userRealmAccessRepository.findById(id, filter);
  }

  @patch('/user-realm-accesses/{id}', {
    responses: {
      '204': {
        description: 'UserRealmAccess PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserRealmAccess, {partial: true}),
        },
      },
    })
    userRealmAccess: UserRealmAccess,
  ): Promise<void> {
    await this.userRealmAccessRepository.updateById(id, userRealmAccess);
  }

  @put('/user-realm-accesses/{id}', {
    responses: {
      '204': {
        description: 'UserRealmAccess PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userRealmAccess: UserRealmAccess,
  ): Promise<void> {
    await this.userRealmAccessRepository.replaceById(id, userRealmAccess);
  }

  @del('/user-realm-accesses/{id}', {
    responses: {
      '204': {
        description: 'UserRealmAccess DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userRealmAccessRepository.deleteById(id);
  }
}
