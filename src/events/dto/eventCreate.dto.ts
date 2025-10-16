import { IsNumber, IsString } from 'class-validator';

export class EventDto {
    @IsString({ message: 'Поле name должно быть строкой' })
    name: string;
    @IsNumber()
    total_seats: number;
}
