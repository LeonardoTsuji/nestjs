import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/categoria')
@UseGuards(AuthGuard)
@ApiTags('Categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  buscarTodos(): Promise<Categoria[]> {
    return this.categoriaService.buscarTodos();
  }
}
