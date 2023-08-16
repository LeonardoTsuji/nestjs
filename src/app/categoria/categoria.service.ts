import { BadRequestException, Injectable } from '@nestjs/common';
import { Categoria } from './categoria.entity';
import { CategoriaRepository } from './categoria.repository';
import SalvarCategoriaDTO from './dtos/SalvarCategoria.dto';
import AtualizarCategoriaDTO from './dtos/AtualizarCategoria.dto';

@Injectable()
export class CategoriaService {
  constructor(private readonly categoriaRepository: CategoriaRepository) {}

  buscarTodos(): Promise<Categoria[]> {
    return this.categoriaRepository.buscarTodos();
  }

  async buscarPorId(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.buscarPorId(id);

    if (!categoria) throw new BadRequestException('Categoria inválida');

    return categoria;
  }

  async salvar(body: SalvarCategoriaDTO): Promise<Categoria> {
    const newCategoria = new Categoria();
    newCategoria.codigo = body.codigo;
    newCategoria.descricao = body.descricao;
    newCategoria.tipo = body.tipo;
    newCategoria.cor = body.cor;
    newCategoria.essencial = body.essencial;
    newCategoria.ativo = true;

    return this.categoriaRepository.salvar(newCategoria);
  }

  async atualizar(id: number, body: AtualizarCategoriaDTO): Promise<Categoria> {
    const categoria = await this.categoriaRepository.buscarPorId(id);
    if (!categoria) throw new BadRequestException('Categoria inválida');

    categoria.ativo = body.ativo || categoria.ativo;
    categoria.codigo = body.codigo || categoria.codigo;
    categoria.descricao = body.descricao || categoria.descricao;
    categoria.tipo = body.tipo || categoria.tipo;
    categoria.cor = body.cor || categoria.cor;
    categoria.essencial = body.essencial || categoria.essencial;

    return this.categoriaRepository.atualizar(categoria);
  }

  async excluir(id: number): Promise<void> {
    const categoria = await this.categoriaRepository.buscarPorId(id);

    if (!categoria) throw new BadRequestException('Categoria inválida');

    await this.categoriaRepository.excluir(categoria);
  }
}
