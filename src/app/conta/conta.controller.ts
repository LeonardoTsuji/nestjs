import { Controller, Get, UseGuards } from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta } from './conta.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/conta')
@UseGuards(AuthGuard)
@ApiTags('Conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Get()
  buscarTodos(): Promise<Conta[]> {
    return this.contaService.buscarTodos();
  }
}
