import { Injectable } from '@nestjs/common';
import { PessoaFisica } from './pessoaFisica.entity';
import { PessoaFisicaRepository } from './pessoaFisica.repository';

@Injectable()
export class PessoaFisicaService {
  constructor(
    private readonly pessoaFisicaRepository: PessoaFisicaRepository,
  ) {}
  buscarTodos(): Promise<PessoaFisica[]> {
    return this.pessoaFisicaRepository.buscarTodos();
  }
}
