import { Controller, Get, UseGuards } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/pessoa')
@UseGuards(AuthGuard)
@ApiTags('Pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/')
  buscarTodos(): Promise<Pessoa[]> {
    return this.pessoaService.buscarTodos();
  }
}
