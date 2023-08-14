import { Controller, Get, UseGuards } from '@nestjs/common';
import { FaturaService } from './fatura.service';
import { Fatura } from './fatura.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/fatura')
@UseGuards(AuthGuard)
@ApiTags('Fatura')
export class FaturaController {
  constructor(private readonly faturaService: FaturaService) {}

  @Get()
  buscarTodos(): Promise<Fatura[]> {
    return this.faturaService.buscarTodos();
  }
}
