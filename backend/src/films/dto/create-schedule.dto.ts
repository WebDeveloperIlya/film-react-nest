import { IsDateString, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateScheduleDto {
  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;

  @IsString()
  @IsNotEmpty()
  hall: string;

  @IsNumber()
  filmId: number;
}
