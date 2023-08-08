import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class LimparLogJob {
  constructor(private readonly logger: Logger) {}

  @Cron(CronExpression.EVERY_DAY_AT_8AM, {
    name: 'LimparLobJob',
  })
  async limpar(): Promise<void> {
    this.logger.log('Limpando logs');
  }
}
