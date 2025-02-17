import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Film } from './film.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @ManyToOne(() => Film, (film) => film.schedules)
  film: Film;
}
