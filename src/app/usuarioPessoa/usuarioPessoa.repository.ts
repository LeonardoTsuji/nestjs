import { DataSource, EntityRepository, Repository } from 'typeorm';
import { UsuarioPessoa } from './usuarioPessoa.entity';

@EntityRepository(UsuarioPessoa)
export class UsuarioPessoaRepository extends Repository<UsuarioPessoa> {
  constructor(dataSource: DataSource) {
    super(UsuarioPessoa, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<UsuarioPessoa[]> {
    return this.createQueryBuilder('usuarioPessoa').getMany();
  }
}
