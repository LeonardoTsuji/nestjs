import { config as dotenvConfig } from 'dotenv';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import SalvarUsuarioDTO from './dtos/SalvarUsuario.dto';
import { BuscarUsuarioDTO } from './dtos/BuscarUsuario.dto';
import { PessoaRepository } from '../pessoa/pessoa.repository';
import { Pessoa } from '../pessoa/pessoa.entity';
import { PessoaFisica } from '../pessoaFisica/pessoaFisica.entity';
import { PessoaFisicaRepository } from '../pessoaFisica/pessoaFisica.repository';
import { UsuarioPessoa } from '../usuarioPessoa/usuarioPessoa.entity';
import { UsuarioPessoaRepository } from '../usuarioPessoa/usuarioPessoa.repository';
import clerk from '@clerk/clerk-sdk-node';

dotenvConfig({ path: '.env' });

@Injectable()
export class UsuarioService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly pessoaRepository: PessoaRepository,
    private readonly pessoaFisicaRepository: PessoaFisicaRepository,
    private readonly usuarioPessoaRepository: UsuarioPessoaRepository,
  ) {}

  buscarTodos(query: BuscarUsuarioDTO): Promise<Usuario[]> {
    return this.usuarioRepository.buscarTodos(query);
  }

  async salvar(body: SalvarUsuarioDTO): Promise<void> {
    try {
      const usuario = new Usuario();
      usuario.login = body.login;
      usuario.ativo = true;
      usuario.idExterno = body.idExterno;
      const newUsuario = await this.usuarioRepository.salvar(usuario);

      const pessoa = new Pessoa();
      const newPessoa = await this.pessoaRepository.salvar(pessoa);

      const pessoaFisica = new PessoaFisica();
      pessoaFisica.nome = body.nome;
      pessoaFisica.cpf = body.cpf;
      pessoaFisica.pessoaId = newPessoa.id;
      await this.pessoaFisicaRepository.salvar(pessoaFisica);

      const usuarioPessoa = new UsuarioPessoa();
      usuarioPessoa.pessoaId = newPessoa.id;
      usuarioPessoa.usuarioId = newUsuario.id;

      await clerk.users.updateUser(body.idExterno, {
        unsafeMetadata: {
          user_internal_id: newUsuario.id,
        },
      });

      await this.usuarioPessoaRepository.salvar(usuarioPessoa);
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Não foi possível criar o usuário');
    }
  }
}
