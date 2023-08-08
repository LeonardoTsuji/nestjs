import { Logger, Module } from '@nestjs/common';
import { LimparLogJob } from './limparLog/limparLog.job';

@Module({
  imports: [],
  providers: [LimparLogJob, Logger],
  exports: [LimparLogJob],
})
export class JobsModule {}
