import { Logger, Module } from '@nestjs/common';
import { CriaFaturaJob } from './criaFatura.job';
import { FaturaModule } from 'src/app/fatura/fatura.module';
import { CartaoModule } from 'src/app/cartao/cartao.module';

@Module({
  imports: [FaturaModule, CartaoModule],
  providers: [CriaFaturaJob, Logger],
  exports: [CriaFaturaJob],
})
export class CriaFaturaModule {}
