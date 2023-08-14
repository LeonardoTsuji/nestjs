import { Injectable } from '@nestjs/common';
import { Banco } from './banco.entity';
import { BancoRepository } from './banco.repository';

@Injectable()
export class BancoService {
  constructor(private readonly bancoRepository: BancoRepository) {}
  buscarTodos(): Promise<Banco[]> {
    return this.bancoRepository.buscarTodos();
  }
}
