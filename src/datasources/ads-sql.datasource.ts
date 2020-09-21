import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'AdsSql',
  connector: 'mssql',
  url: '',
  host: 'sql5063.site4now.net',
  port: 0,
  user: 'DB_9C44CC_adsApi_admin',
  password: 'adsapi@2020',
  database: 'DB_9C44CC_adsApi',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AdsSqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'AdsSql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.AdsSql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
