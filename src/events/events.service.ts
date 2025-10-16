import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventDto } from './dto/eventCreate.dto';
import { EVENT_NOT_FOUND_ERROR, INVALID_EVENT_DATA_ERROR } from './events.constamts';

@Injectable()
export class EventsService {
    constructor(private prisma: PrismaService) {}

    async create(eventEmpty: EventDto) {
        if (!eventEmpty.name || eventEmpty.total_seats <= 0) {
            throw new BadRequestException(INVALID_EVENT_DATA_ERROR);
        }

        const event = await this.prisma.event.create({
            data: {
                name: eventEmpty.name,
                total_seats: eventEmpty.total_seats,
            },
        });

        return event;
    }

    async findAll() {
        return this.prisma.event.findMany({
            include: {
                bookings: true,
            },
        });
    }

    async findOne(uid: string) {
        const event = await this.prisma.event.findUnique({
            where: { id: uid },
            include: { bookings: true },
        });

        if (!event) throw new BadRequestException(EVENT_NOT_FOUND_ERROR);
        return event;
    }
}
