import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubcategoriaController } from './subcategoria.controller';
import { SubcategoriaService } from './subcategoria.service';
import { Subcategoria } from './subcategoria.entity';
import { SubcategoriaRepository } from './subcategoria.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategoria])],
  controllers: [SubcategoriaController],
  providers: [SubcategoriaService, SubcategoriaRepository],
  exports: [SubcategoriaService],
})
export class SubcategoriaModule {}
