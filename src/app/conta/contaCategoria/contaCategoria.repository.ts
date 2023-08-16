import { DataSource, EntityRepository, Repository } from 'typeorm';
import { ContaCategoria } from './contaCategoria.entity';

@EntityRepository(ContaCategoria)
export class ContaCategoriaRepository extends Repository<ContaCategoria> {
  constructor(dataSource: DataSource) {
    super(ContaCategoria, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<ContaCategoria[]> {
    return this.createQueryBuilder('contaCategoria').getMany();
  }

  buscarPorCodigo(codigo: string): Promise<ContaCategoria> {
    return this.createQueryBuilder('contaCategoria')
      .where('contaCategoria.codigo = :codigo', {
        codigo,
      })
      .getOne();
  }
}
