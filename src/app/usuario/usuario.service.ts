import { BadRequestException, Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import SalvarUsuarioDTO from './dtos/SalvarUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  buscarTodos(): Promise<Usuario[]> {
    return this.usuarioRepository.buscarTodos();
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
