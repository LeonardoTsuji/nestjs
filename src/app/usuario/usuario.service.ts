import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}
  buscarTodos(): Promise<Usuario[]> {
    return this.usuarioRepository.buscarTodos();
  }
}
