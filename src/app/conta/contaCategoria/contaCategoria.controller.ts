import { Controller, Get, UseGuards } from '@nestjs/common';
import { ContaCategoriaService } from './contaCategoria.service';
import { ContaCategoria } from './contaCategoria.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/contaCategoria')
@UseGuards(AuthGuard)
@ApiTags('ContaCategoria')
export class ContaCategoriaController {
  constructor(private readonly contaCategoriaService: ContaCategoriaService) {}

  @Get()
  buscarTodos(): Promise<ContaCategoria[]> {
    return this.contaCategoriaService.buscarTodos();
  }
}
