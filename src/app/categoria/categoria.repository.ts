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
}
