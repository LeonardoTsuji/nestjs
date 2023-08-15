import { DataSource, EntityRepository, Repository } from 'typeorm';
import { CartaoCategoria } from './cartaoCategoria.entity';

@EntityRepository(CartaoCategoria)
export class CartaoCategoriaRepository extends Repository<CartaoCategoria> {
  constructor(dataSource: DataSource) {
    super(CartaoCategoria, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<CartaoCategoria[]> {
    return this.createQueryBuilder('cartaoCategoria').getMany();
  }

  buscarPorCodigo(codigo: string): Promise<CartaoCategoria> {
    return this.createQueryBuilder('cartaoCategoria')
      .where('cartaoCategoria.codigo = :codigo', {
        codigo,
      })
      .getOne();
  }
}
