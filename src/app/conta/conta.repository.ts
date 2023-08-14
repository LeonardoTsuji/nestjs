import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Conta } from './conta.entity';

@EntityRepository(Conta)
export class ContaRepository extends Repository<Conta> {
  constructor(dataSource: DataSource) {
    super(Conta, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Conta[]> {
    return this.createQueryBuilder('conta').getMany();
  }
}
