import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CartaoCategoriaController } from './cartaoCategoria.controller';
import { CartaoCategoriaService } from './cartaoCategoria.service';
import { CartaoCategoria } from './cartaoCategoria.entity';
import { CartaoCategoriaRepository } from './cartaoCategoria.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CartaoCategoria])],
  controllers: [CartaoCategoriaController],
  providers: [CartaoCategoriaService, CartaoCategoriaRepository],
  exports: [CartaoCategoriaService, CartaoCategoriaRepository],
})
export class CartaoCategoriaModule {}
