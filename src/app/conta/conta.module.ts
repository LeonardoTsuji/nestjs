import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContaController } from './conta.controller';
import { ContaService } from './conta.service';
import { BancoModule } from './banco/banco.module';
import { ContaCategoriaModule } from './contaCategoria/contaCategoria.module';
import { Conta } from './conta.entity';
import { ContaRepository } from './conta.repository';
import { PessoaModule } from '../pessoa/pessoa.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conta]),
    BancoModule,
    ContaCategoriaModule,
    PessoaModule,
  ],
  controllers: [ContaController],
  providers: [ContaService, ContaRepository],
  exports: [ContaService, BancoModule, ContaCategoriaModule],
})
export class ContaModule {}
