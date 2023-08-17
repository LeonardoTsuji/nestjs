import { BadRequestException, Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import SalvarUsuarioDTO from './dtos/SalvarUsuario.dto';
import { BuscarUsuarioDTO } from './dtos/BuscarUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  buscarTodos(query: BuscarUsuarioDTO): Promise<Usuario[]> {
    return this.usuarioRepository.buscarTodos(query);
  }

  async salvar(body: SalvarUsuarioDTO): Promise<void> {
    try {
      const usuario = new Usuario();
      usuario.login = body.login;
      await this.usuarioRepository.save(usuario);
    } catch (error) {
      throw new BadRequestException('Não foi possível criar o usuário');
    }
  }
}
