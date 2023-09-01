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

  buscarPorUsuarioId(usuarioId: number): Promise<UsuarioPessoa[]> {
    return this.createQueryBuilder('usuarioPessoa')
      .where('usuarioPessoa.usuarioId = :usuarioId', {
        usuarioId,
      })
      .getMany();
  }

  async salvar(usuarioPessoa: UsuarioPessoa): Promise<UsuarioPessoa> {
    const newUsuarioPessoa = await this.create(usuarioPessoa);

    return await this.save(newUsuarioPessoa);
  }
}
