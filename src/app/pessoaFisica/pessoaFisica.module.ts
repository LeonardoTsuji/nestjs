import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PessoaFisicaController } from './pessoaFisica.controller';
import { PessoaFisicaService } from './pessoaFisica.service';
import { PessoaFisica } from './pessoaFisica.entity';
import { PessoaFisicaRepository } from './pessoaFisica.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaFisica])],
  controllers: [PessoaFisicaController],
  providers: [PessoaFisicaService, PessoaFisicaRepository],
  exports: [PessoaFisicaService, PessoaFisicaRepository],
})
export class PessoaFisicaModule {}
