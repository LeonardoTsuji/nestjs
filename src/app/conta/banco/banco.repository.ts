import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Banco } from './banco.entity';

@EntityRepository(Banco)
export class BancoRepository extends Repository<Banco> {
  constructor(dataSource: DataSource) {
    super(Banco, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Banco[]> {
    return this.createQueryBuilder('banco').getMany();
  }

  buscarPorCodigo(codigo: string): Promise<Banco> {
    return this.createQueryBuilder('banco')
      .where('banco.codigo = :codigo', {
        codigo,
      })
      .getOne();
  }
}
