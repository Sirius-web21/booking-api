import { Body, Controller, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { ReserveDto } from './dto/reserve.dto';

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingService: BookingsService) {}

    @Post('reserve')
    async reserve(@Body() body: ReserveDto) {
        return this.bookingService.reserve(body);
    }
}
