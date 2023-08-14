import { Injectable } from '@nestjs/common';
import { Subcategoria } from './subcategoria.entity';
import { SubcategoriaRepository } from './subcategoria.repository';

@Injectable()
export class SubcategoriaService {
  constructor(
    private readonly subcategoriaRepository: SubcategoriaRepository,
  ) {}
  buscarTodos(): Promise<Subcategoria[]> {
    return this.subcategoriaRepository.buscarTodos();
  }
}
