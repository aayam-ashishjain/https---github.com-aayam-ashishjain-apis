import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'AdsMySql',
  connector: 'mysql',
  url: '',
  host: 'mysql5021.site4now.net',
  port: 0,
  user: '9c44cc_invest',
  password: 'invest@123',
  database: 'db_9c44cc_invest'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AdsMySqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'AdsMySql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.AdsMySql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
