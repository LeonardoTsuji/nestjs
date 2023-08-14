import { Injectable } from '@nestjs/common';
import { UsuarioPessoa } from './usuarioPessoa.entity';
import { UsuarioPessoaRepository } from './usuarioPessoa.repository';

@Injectable()
export class UsuarioPessoaService {
  constructor(
    private readonly usuarioPessoaRepository: UsuarioPessoaRepository,
  ) {}
  buscarTodos(): Promise<UsuarioPessoa[]> {
    return this.usuarioPessoaRepository.buscarTodos();
  }
}
