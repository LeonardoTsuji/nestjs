import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const DatabaseOptions = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  type: 'postgres',
  username: process.env.DATABASE_USERNAME,
  password: String(process.env.DATABASE_PASSWORD),
  database: process.env.DATABASE_NAME,
  entities: [
    process.env.NODE_ENV === 'development'
      ? __dirname + '/../../app/**/*.entity{.ts,.js}'
      : __dirname + '/../../dist/app/**/*.entity.js',
  ],
  migrations: [
    process.env.NODE_ENV === 'development'
      ? __dirname + '/migrations/*.ts'
      : './dist/database/typeorm/migrations/*.js',
  ],
};

export default registerAs('typeorm', () => DatabaseOptions);
export const connectionSource = new DataSource(
  DatabaseOptions as DataSourceOptions,
);
