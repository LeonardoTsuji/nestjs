import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
  constructor(dataSource: DataSource) {
    super(Usuario, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Usuario[]> {
    return this.createQueryBuilder('usuario').getMany();
  }

  buscarPorNome(nome: string): Promise<Usuario> {
    return this.createQueryBuilder('usuario')
      .where('nome = :nome', {
        nome,
      })
      .getOne();
  }
}
