import { Controller, Get, UseGuards } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { Transacao } from './transacao.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/transacao')
@UseGuards(AuthGuard)
@ApiTags('Transacao')
export class TransacaoController {
  constructor(private readonly transacaoService: TransacaoService) {}

  @Get()
  buscarTodos(): Promise<Transacao[]> {
    return this.transacaoService.buscarTodos();
  }
}
