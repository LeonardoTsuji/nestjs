import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import SalvarCategoriaDTO from './dtos/SalvarCategoria.dto';
import AtualizarCategoriaDTO from './dtos/AtualizarCategoria.dto';

@Controller('/categoria')
@UseGuards(AuthGuard)
@ApiTags('Categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  buscarTodos(): Promise<Categoria[]> {
    return this.categoriaService.buscarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: number): Promise<Categoria> {
    return this.categoriaService.buscarPorId(id);
  }

  @Post()
  salvar(@Body() body: SalvarCategoriaDTO): Promise<Categoria> {
    return this.categoriaService.salvar(body);
  }

  @Put(':id')
  atualizar(
    @Param('id') id: number,
    @Body() body: AtualizarCategoriaDTO,
  ): Promise<Categoria> {
    return this.categoriaService.atualizar(id, body);
  }

  @Delete(':id')
  async excluir(@Param('id') id: number): Promise<void> {
    await this.categoriaService.excluir(id);
  }
}
