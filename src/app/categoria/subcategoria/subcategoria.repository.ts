import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Subcategoria } from './subcategoria.entity';

@EntityRepository(Subcategoria)
export class SubcategoriaRepository extends Repository<Subcategoria> {
  constructor(dataSource: DataSource) {
    super(Subcategoria, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Subcategoria[]> {
    return this.createQueryBuilder('subcategoria').getMany();
  }
}
