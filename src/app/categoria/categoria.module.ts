import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { CategoriaRepository } from './categoria.repository';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), SubcategoriaModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaRepository],
  exports: [CategoriaService, SubcategoriaModule],
})
export class CategoriaModule {}
