import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransacaoController } from './transacao.controller';
import { TransacaoService } from './transacao.service';
import { Transacao } from './transacao.entity';
import { TransacaoRepository } from './transacao.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Transacao])],
  controllers: [TransacaoController],
  providers: [TransacaoService, TransacaoRepository],
  exports: [TransacaoService],
})
export class TransacaoModule {}
