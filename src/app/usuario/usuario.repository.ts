import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { BuscarUsuarioDTO } from './dtos/BuscarUsuario.dto';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
  constructor(dataSource: DataSource) {
    super(Usuario, dataSource.createEntityManager());
  }

  buscarTodos(params: BuscarUsuarioDTO): Promise<Usuario[]> {
    const query = this.createQueryBuilder('usuario').where('1 = 1');

    if (params?.login)
      query.andWhere('usuario.login = :login', { login: params.login });

    return query.getMany();
  }

  buscarPorNome(nome: string): Promise<Usuario> {
    return this.createQueryBuilder('usuario')
      .where('nome = :nome', {
        nome,
      })
      .getOne();
  }

  async salvar(usuario: Usuario): Promise<Usuario> {
    const newUsuario = await this.create(usuario);

    return await this.save(newUsuario);
  }
}
