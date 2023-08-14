import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Telefone } from './telefone.entity';

@EntityRepository(Telefone)
export class TelefoneRepository extends Repository<Telefone> {
  constructor(dataSource: DataSource) {
    super(Telefone, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Telefone[]> {
    return this.createQueryBuilder('telefone').getMany();
  }
}
