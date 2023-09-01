import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@EntityRepository(Categoria)
export class CategoriaRepository extends Repository<Categoria> {
  constructor(dataSource: DataSource) {
    super(Categoria, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Categoria[]> {
    return this.createQueryBuilder('categoria').getMany();
  }

  buscarPorCodigo(codigo: string): Promise<Categoria> {
    return this.createQueryBuilder('categoria')
      .where('categoria.codigo = :codigo', {
        codigo,
      })
      .getOne();
  }

  buscarPorId(id: number): Promise<Categoria> {
    return this.createQueryBuilder('categoria')
      .where('categoria.id = :id', {
        id,
      })
      .getOne();
  }

  async salvar(categoria: Categoria): Promise<Categoria> {
    const newCategoria = await this.create(categoria);

    return await this.save(newCategoria);
  }

  async atualizar(categoria: Categoria): Promise<Categoria> {
    return this.save(categoria);
  }

  async excluir(categoria: Categoria): Promise<void> {
    await this.softRemove(categoria);
  }
}
