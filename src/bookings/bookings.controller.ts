import { Body, Controller, Param, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { ReserveDto } from './dto/reserve.dto';

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingService: BookingsService) {}

    @Post('reserve')
    async reserve(@Body() body: ReserveDto) {
        return this.bookingService.reserve(body);
    }

    @Post('top10')
    async top10BookingEvent(@Body() body: { start: string; end: string }) {
        const startDate = new Date(body.start);
        const endDate = new Date(body.end);
        return this.bookingService.top10BookingEvent(startDate, endDate);
    }
}
