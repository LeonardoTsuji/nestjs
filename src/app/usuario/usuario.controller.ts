import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/usuario')
@UseGuards(AuthGuard)
@ApiTags('Usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  buscarTodos(): Promise<Usuario[]> {
    return this.usuarioService.buscarTodos();
  }
}
