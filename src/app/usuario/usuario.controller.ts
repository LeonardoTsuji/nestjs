import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import SalvarUsuarioDTO from './dtos/SalvarUsuario.dto';

@Controller('/usuario')
@UseGuards(AuthGuard)
@ApiTags('Usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  buscarTodos(): Promise<Usuario[]> {
    return this.usuarioService.buscarTodos();
  }

  @Post()
  async salvar(@Body() body: SalvarUsuarioDTO): Promise<void> {
    await this.usuarioService.salvar(body);
  }
}
