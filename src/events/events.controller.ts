import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventDto } from './dto/eventCreate.dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post('create')
    async create(@Body() body: EventDto) {
        return this.eventsService.create(body);
    }

    @Get()
    async findAll() {
        return this.eventsService.findAll();
    }

    @Get(':uid')
    async findOne(@Param('uid') uid: string) {
        return this.eventsService.findOne(uid);
    }
}
