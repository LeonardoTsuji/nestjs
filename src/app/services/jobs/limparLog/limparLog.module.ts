import { Logger, Module } from '@nestjs/common';
import { LimparLogJob } from './limparLog.job';

@Module({
  imports: [Logger],
  providers: [LimparLogJob, Logger],
  exports: [LimparLogJob],
})
export class LimparLogModule {}
