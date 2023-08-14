import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioPessoaService } from './usuarioPessoa.service';
import { UsuarioPessoa } from './usuarioPessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioPessoa])],
  controllers: [],
  providers: [UsuarioPessoaService],
  exports: [UsuarioPessoaService],
})
export class UsuarioPessoaModule {}
