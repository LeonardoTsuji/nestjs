import { Injectable } from '@nestjs/common';
import { Cartao } from './cartao.entity';
import { CartaoRepository } from './cartao.repository';

@Injectable()
export class CartaoService {
  constructor(private readonly cartaoRepository: CartaoRepository) {}
  buscarTodos(): Promise<Cartao[]> {
    return this.cartaoRepository.buscarTodos();
  }
}
