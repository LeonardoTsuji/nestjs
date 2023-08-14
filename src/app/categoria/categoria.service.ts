import { Injectable } from '@nestjs/common';
import { Categoria } from './categoria.entity';
import { CategoriaRepository } from './categoria.repository';

@Injectable()
export class CategoriaService {
  constructor(private readonly categoriaRepository: CategoriaRepository) {}
  buscarTodos(): Promise<Categoria[]> {
    return this.categoriaRepository.buscarTodos();
  }
}
