import { Controller, Get, UseGuards } from '@nestjs/common';
import { SubcategoriaService } from './subcategoria.service';
import { Subcategoria } from './subcategoria.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/subcategoria')
@UseGuards(AuthGuard)
@ApiTags('Subcategoria')
export class SubcategoriaController {
  constructor(private readonly subcategoriaService: SubcategoriaService) {}

  @Get()
  buscarTodos(): Promise<Subcategoria[]> {
    return this.subcategoriaService.buscarTodos();
  }
}
