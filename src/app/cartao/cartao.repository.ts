import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Cartao } from './cartao.entity';

@EntityRepository(Cartao)
export class CartaoRepository extends Repository<Cartao> {
  constructor(dataSource: DataSource) {
    super(Cartao, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Cartao[]> {
    return this.createQueryBuilder('cartao').getMany();
  }
}
