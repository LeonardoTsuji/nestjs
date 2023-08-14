import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Transacao } from './transacao.entity';

@EntityRepository(Transacao)
export class TransacaoRepository extends Repository<Transacao> {
  constructor(dataSource: DataSource) {
    super(Transacao, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Transacao[]> {
    return this.createQueryBuilder('transacao').getMany();
  }
}
