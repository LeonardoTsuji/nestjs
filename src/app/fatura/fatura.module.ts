import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FaturaController } from './fatura.controller';
import { FaturaService } from './fatura.service';
import { Fatura } from './fatura.entity';
import { FaturaRepository } from './fatura.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Fatura])],
  controllers: [FaturaController],
  providers: [FaturaService, FaturaRepository],
  exports: [FaturaService],
})
export class FaturaModule {}
