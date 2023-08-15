import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartaoController } from './cartao.controller';
import { CartaoService } from './cartao.service';
import { BandeiraModule } from './bandeira/bandeira.module';
import { CartaoCategoriaModule } from './cartaoCategoria/cartaoCategoria.module';
import { Cartao } from './cartao.entity';
import { CartaoRepository } from './cartao.repository';
import { PessoaModule } from '../pessoa/pessoa.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cartao]),
    BandeiraModule,
    CartaoCategoriaModule,
    PessoaModule,
  ],
  controllers: [CartaoController],
  providers: [CartaoService, CartaoRepository],
  exports: [
    CartaoService,
    CartaoRepository,
    BandeiraModule,
    CartaoCategoriaModule,
  ],
})
export class CartaoModule {}
