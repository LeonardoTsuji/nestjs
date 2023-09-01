import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { PessoaModule } from '../pessoa/pessoa.module';
import { UsuarioPessoaModule } from '../usuarioPessoa/usuarioPessoa.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    PessoaModule,
    UsuarioPessoaModule,
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository],
  exports: [UsuarioService],
})
export class UsuarioModule {}
