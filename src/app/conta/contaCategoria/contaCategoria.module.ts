import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContaCategoriaController } from './contaCategoria.controller';
import { ContaCategoriaService } from './contaCategoria.service';
import { ContaCategoria } from './contaCategoria.entity';
import { ContaCategoriaRepository } from './contaCategoria.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ContaCategoria])],
  controllers: [ContaCategoriaController],
  providers: [ContaCategoriaService, ContaCategoriaRepository],
  exports: [ContaCategoriaService],
})
export class ContaCategoriaModule {}
