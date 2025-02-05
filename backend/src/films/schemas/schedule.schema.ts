import { Schema, Document } from 'mongoose';
import { Prop, Schema as NestSchema } from '@nestjs/mongoose';
import { Film } from '../../films/schemas/film.schema';

@NestSchema()
export class Schedule {
  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;

  @Prop({ type: Schema.Types.ObjectId, ref: 'Film' })
  film: Film;
}

export type ScheduleDocument = Schedule & Document;

export const ScheduleSchema = new Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  film: { type: Schema.Types.ObjectId, ref: 'Film' },
});
