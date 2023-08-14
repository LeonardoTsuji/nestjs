import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TelefoneController } from './telefone.controller';
import { TelefoneService } from './telefone.service';
import { Telefone } from './telefone.entity';
import { TelefoneRepository } from './telefone.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Telefone])],
  controllers: [TelefoneController],
  providers: [TelefoneService, TelefoneRepository],
  exports: [TelefoneService],
})
export class TelefoneModule {}
