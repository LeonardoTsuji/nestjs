import { Injectable } from '@nestjs/common';
import { Transacao } from './transacao.entity';
import { TransacaoRepository } from './transacao.repository';

@Injectable()
export class TransacaoService {
  constructor(private readonly transacaoRepository: TransacaoRepository) {}
  buscarTodos(): Promise<Transacao[]> {
    return this.transacaoRepository.buscarTodos();
  }
}
