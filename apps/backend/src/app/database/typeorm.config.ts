import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { DatabaseConfig } from './database.config';

const dbConfig = new DatabaseConfig(new ConfigService());

export default new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [],
  migrations: [],
});
