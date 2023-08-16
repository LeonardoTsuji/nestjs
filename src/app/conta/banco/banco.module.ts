import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BancoController } from './banco.controller';
import { BancoService } from './banco.service';
import { Banco } from './banco.entity';
import { BancoRepository } from './banco.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Banco])],
  controllers: [BancoController],
  providers: [BancoService, BancoRepository],
  exports: [BancoService, BancoRepository],
})
export class BancoModule {}
