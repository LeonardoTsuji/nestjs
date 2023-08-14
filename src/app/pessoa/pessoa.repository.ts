import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {
  constructor(dataSource: DataSource) {
    super(Pessoa, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Pessoa[]> {
    return this.createQueryBuilder('pessoa').getMany();
  }
}
