import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioPessoaService } from './usuarioPessoa.service';
import { UsuarioPessoa } from './usuarioPessoa.entity';
import { UsuarioPessoaRepository } from './usuarioPessoa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioPessoa])],
  controllers: [],
  providers: [UsuarioPessoaService, UsuarioPessoaRepository],
  exports: [UsuarioPessoaService, UsuarioPessoaRepository],
})
export class UsuarioPessoaModule {}
