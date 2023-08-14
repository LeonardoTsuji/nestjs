import { Controller, Get, UseGuards } from '@nestjs/common';
import { PessoaFisicaService } from './pessoaFisica.service';
import { PessoaFisica } from './pessoaFisica.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/pessoaFisica')
@UseGuards(AuthGuard)
@ApiTags('PessoaFisica')
export class PessoaFisicaController {
  constructor(private readonly pessoaFisicaService: PessoaFisicaService) {}

  @Get()
  buscarTodos(): Promise<PessoaFisica[]> {
    return this.pessoaFisicaService.buscarTodos();
  }
}
