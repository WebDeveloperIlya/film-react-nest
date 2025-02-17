import { ConfigModule } from '@nestjs/config';

export const applicationConfig = process.env;
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getDatabaseConfig = () => {
  const driver = process.env.DATABASE_DRIVER || 'mongodb';

  if (driver === 'postgres') {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'user',
      password: process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.POSTGRES_DB || 'film',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions;
  }

  return {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/film',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongooseModuleOptions;
};

export const configProvider = {
  imports: [ConfigModule.forRoot()],
  provide: 'CONFIG',
  useValue: {
    //TODO прочесть переменнные среды
    database: {
      driver: process.env.DATABASE_DRIVER || 'mongodb',
      url: process.env.DATABASE_URL || 'mongodb://localhost:27017/prac',
    },
  },
};

export interface AppConfig {
  database: AppConfigDatabase;
}

export interface AppConfigDatabase {
  driver: string;
  url: string;
}
