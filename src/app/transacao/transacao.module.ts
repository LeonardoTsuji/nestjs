import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransacaoController } from './transacao.controller';
import { TransacaoService } from './transacao.service';
import { Transacao } from './transacao.entity';
import { TransacaoRepository } from './transacao.repository';
import { CartaoModule } from '../cartao/cartao.module';
import { CategoriaModule } from '../categoria/categoria.module';
import { FaturaModule } from '../fatura/fatura.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transacao]),
    CartaoModule,
    CategoriaModule,
    FaturaModule,
  ],
  controllers: [TransacaoController],
  providers: [TransacaoService, TransacaoRepository],
  exports: [TransacaoService, CartaoModule, CategoriaModule, FaturaModule],
})
export class TransacaoModule {}
