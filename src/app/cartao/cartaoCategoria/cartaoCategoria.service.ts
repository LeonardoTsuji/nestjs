import { Injectable } from '@nestjs/common';
import { CartaoCategoria } from './cartaoCategoria.entity';
import { CartaoCategoriaRepository } from './cartaoCategoria.repository';

@Injectable()
export class CartaoCategoriaService {
  constructor(
    private readonly cartaoCategoriaRepository: CartaoCategoriaRepository,
  ) {}
  buscarTodos(): Promise<CartaoCategoria[]> {
    return this.cartaoCategoriaRepository.buscarTodos();
  }
}
