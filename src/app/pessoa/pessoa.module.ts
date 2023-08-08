import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';
import { PessoaRepository } from './pessoa.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaRepository])],
  controllers: [PessoaController],
  providers: [PessoaService],
  exports: [PessoaService],
})
export class PessoaModule {}
