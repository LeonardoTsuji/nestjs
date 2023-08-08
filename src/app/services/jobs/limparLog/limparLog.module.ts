import { Module } from '@nestjs/common';
import { LimparLogJob } from './limparLog.job';

@Module({
  imports: [],
  providers: [LimparLogJob],
  exports: [LimparLogJob],
})
export class LimparLogModule {}
