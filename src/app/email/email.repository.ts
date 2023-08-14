import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Email } from './email.entity';

@EntityRepository(Email)
export class EmailRepository extends Repository<Email> {
  constructor(dataSource: DataSource) {
    super(Email, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Email[]> {
    return this.createQueryBuilder('email').getMany();
  }
}
