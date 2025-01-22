import { IsString, IsArray, IsNumber } from 'class-validator';

export class GetScheduleDTO {
  @IsString()
  id: string;

  @IsString()
  daytime: string;

  @IsNumber()
  hall: number;

  @IsNumber()
  rows: number;

  @IsNumber()
  seats: number;

  @IsNumber()
  price: number;

  @IsArray()
  @IsString({ each: true })
  taken: string[];
}

export class GetFilmDto {
  @IsString()
  id: string;

  @IsNumber()
  rating: number;

  @IsString()
  director: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsString()
  image: string;

  @IsString()
  cover: string;

  @IsString()
  title: string;

  @IsString()
  about: string;

  @IsString()
  description: string;

  @IsArray()
  schedule: GetScheduleDTO[];
}

export class GetFilmsDto {
  @IsNumber()
  total: number;

  @IsArray()
  items: GetFilmDto[];
}
