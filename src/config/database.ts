import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const DatabaseOptions: TypeOrmModuleOptions = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  type: 'postgres',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

export default DatabaseOptions;
