import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';

@Module({
    imports: [BookingsModule, PrismaModule, EventsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
