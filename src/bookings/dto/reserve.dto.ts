import { IsNumber, IsString } from 'class-validator';

export class ReserveDto {
    @IsString()
    event_id: string;

    @IsString()
    user_id: string;
}
