import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { PessoaRepository } from './pessoa.repository';
import { EmailModule } from '../email/email.module';
import { TelefoneModule } from '../telefone/telefone.module';
import { PessoaFisicaModule } from '../pessoaFisica/pessoaFisica.module';
import { Pessoa } from './pessoa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pessoa]),
    EmailModule,
    TelefoneModule,
    PessoaFisicaModule,
  ],
  controllers: [PessoaController],
  providers: [PessoaService, PessoaRepository],
  exports: [
    TypeOrmModule,
    PessoaService,
    EmailModule,
    TelefoneModule,
    PessoaFisicaModule,
    PessoaRepository,
  ],
})
export class PessoaModule {}
