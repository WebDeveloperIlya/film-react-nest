import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Film } from './entities/film.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
  ) {}

  async create(dto: CreateScheduleDto): Promise<Schedule> {
    const film = await this.filmRepository.findOne({
      where: { id: dto.filmId },
    });
    if (!film) {
      throw new Error('Film not found');
    }

    const schedule = this.scheduleRepository.create({
      ...dto,
      film,
    });

    return this.scheduleRepository.save(schedule);
  }

  async findAll(): Promise<Schedule[]> {
    return this.scheduleRepository.find({ relations: ['film'] });
  }
}
