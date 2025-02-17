import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './films/entities/film.entity';
import { Schedule } from './films/entities/schedule.entity';
import { ScheduleService } from './films/schedule.service';
import { ScheduleController } from './films/schedule.controller';
import { FilmsService } from './films/films.service';
import { FilmsController } from './films/films.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_DRIVER === 'postgres' ? 'postgres' : 'mongodb',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true, // True for dev; use migrations in prod
      entities: [Film, Schedule],
    }),
    TypeOrmModule.forFeature([Film, Schedule]),
  ],
  controllers: [FilmsController, ScheduleController],
  providers: [FilmsService, ScheduleService],
})
export class AppModule {}
