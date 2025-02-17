import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Film } from './film.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  time: string;

  @ManyToOne(() => Film, (film) => film.schedules)
  film: Film;
}
