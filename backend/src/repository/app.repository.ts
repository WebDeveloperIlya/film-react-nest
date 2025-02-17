import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';
import { Film } from '../entities/film.entity';
import { Schedule } from '../entities/schedule.entity';
import { FilmDocument } from '../films/schemas/film.schema';
import { ScheduleDocument } from '../films/schemas/schedule.schema';

@Injectable()
export class AppRepository {
  constructor(
    @Inject('FILM_REPOSITORY')
    private filmRepository: Repository<Film> | Model<FilmDocument>,
    @Inject('SCHEDULE_REPOSITORY')
    private scheduleRepository: Repository<Schedule> | Model<ScheduleDocument>,
  ) {}

  async getFilms() {
    return this.isMongo();
    this.filmRepository.find();
  }

  async getSchedules() {
    return this.isMongo();
    this.scheduleRepository.find();
  }

  private isMongo() {
    return typeof this.filmRepository['find'] !== 'function';
  }
}
