import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ScheduleService {
  @Cron('*/10 * * * * *') // 每10分钟执行一次
  handleCron() {
    console.log('定时任务已执行');
  }
}