import { Module } from '@nestjs/common';
import { CriaFaturaModule } from './criaFatura/criaFatura.module';
import { LimparLogModule } from './limparLog/limparLog.module';

@Module({
  imports: [CriaFaturaModule],
  exports: [CriaFaturaModule],
})
export class JobsModule {}
