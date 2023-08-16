import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Bandeira } from './bandeira.entity';

@EntityRepository(Bandeira)
export class BandeiraRepository extends Repository<Bandeira> {
  constructor(dataSource: DataSource) {
    super(Bandeira, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Bandeira[]> {
    return this.createQueryBuilder('bandeira').getMany();
  }

  buscarPorCodigo(codigo: string): Promise<Bandeira> {
    return this.createQueryBuilder('bandeira')
      .where('bandeira.codigo = :codigo', {
        codigo,
      })
      .getOne();
  }
}
