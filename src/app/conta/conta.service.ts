import { Injectable } from '@nestjs/common';
import { Conta } from './conta.entity';
import { ContaRepository } from './conta.repository';

@Injectable()
export class ContaService {
  constructor(private readonly contaRepository: ContaRepository) {}
  buscarTodos(): Promise<Conta[]> {
    return this.contaRepository.buscarTodos();
  }
}
