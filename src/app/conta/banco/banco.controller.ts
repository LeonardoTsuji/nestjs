import { Controller, Get, UseGuards } from '@nestjs/common';
import { BancoService } from './banco.service';
import { Banco } from './banco.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/banco')
@UseGuards(AuthGuard)
@ApiTags('Banco')
export class BancoController {
  constructor(private readonly bancoService: BancoService) {}

  @Get()
  buscarTodos(): Promise<Banco[]> {
    return this.bancoService.buscarTodos();
  }
}
