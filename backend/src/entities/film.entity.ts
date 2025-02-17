import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entity';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Schedule, (schedule) => schedule.film)
  schedules: Schedule[];
}
