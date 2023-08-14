import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Fatura } from './fatura.entity';

@EntityRepository(Fatura)
export class FaturaRepository extends Repository<Fatura> {
  constructor(dataSource: DataSource) {
    super(Fatura, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Fatura[]> {
    return this.createQueryBuilder('fatura').getMany();
  }
}
