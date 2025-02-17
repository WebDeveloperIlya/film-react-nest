import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Schedule } from './schedule.entity'; // Путь к Schedule сущности

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column('varchar', { length: 255, nullable: true })
  posterUrl: string;

  @OneToMany(() => Schedule, (schedule) => schedule.film)
  schedules: Schedule[];
}
