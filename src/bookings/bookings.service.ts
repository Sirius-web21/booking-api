import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReserveDto } from './dto/reserve.dto';
import { EVENT_NOT_FOUND_ERROR, THERE_ARE_NO_EMPTY_SEATS, USER_BOOKING_EVENT_ERROR } from './booking.constants';

@Injectable()
export class BookingsService {
    constructor(private readonly prisma: PrismaService) {}

    async reserve(reserve: ReserveDto) {
        const event = await this.prisma.event.findUnique({
            where: { id: reserve.event_id },
            include: { bookings: true },
        });

        if (!event) throw new BadRequestException(EVENT_NOT_FOUND_ERROR);

        if (event.bookings.length >= event.total_seats) throw new BadRequestException(THERE_ARE_NO_EMPTY_SEATS);

        const existingBookings = await this.prisma.bookings.findUnique({
            where: { event_id_user_id: reserve },
        });

        if (existingBookings) throw new BadRequestException(USER_BOOKING_EVENT_ERROR);

        const booking = await this.prisma.bookings.create({
            data: {
                event_id: reserve.event_id,
                user_id: reserve.user_id,
            },
        });
        return booking;
    }
}
