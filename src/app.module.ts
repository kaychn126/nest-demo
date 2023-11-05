import { Module } from '@nestjs/common';
import { HomeController } from './modules/home/home.controller';
import { HomeService } from './modules/home/home.service';
import { ScheduleService } from './modules/schedule/schedule.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [HomeController],
  providers: [HomeService, ScheduleService],
})
export class AppModule {}
