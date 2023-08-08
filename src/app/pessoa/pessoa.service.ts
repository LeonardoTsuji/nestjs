import { Injectable } from '@nestjs/common';
import { Pessoa } from './pessoa.entity';
import { PessoaRepository } from './pessoa.repository';

@Injectable()
export class PessoaService {
  constructor(private readonly pessoaRepository: PessoaRepository) {}
  buscarTodos(): Promise<Pessoa[]> {
    return this.pessoaRepository.buscarTodos();
  }
}
