import { Injectable } from '@nestjs/common';
import { ContaCategoria } from './contaCategoria.entity';
import { ContaCategoriaRepository } from './contaCategoria.repository';

@Injectable()
export class ContaCategoriaService {
  constructor(
    private readonly contaCategoriaRepository: ContaCategoriaRepository,
  ) {}
  buscarTodos(): Promise<ContaCategoria[]> {
    return this.contaCategoriaRepository.buscarTodos();
  }
}
