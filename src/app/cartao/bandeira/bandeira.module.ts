import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BandeiraController } from './bandeira.controller';
import { BandeiraService } from './bandeira.service';
import { Bandeira } from './bandeira.entity';
import { BandeiraRepository } from './bandeira.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Bandeira])],
  controllers: [BandeiraController],
  providers: [BandeiraService, BandeiraRepository],
  exports: [BandeiraService, BandeiraRepository],
})
export class BandeiraModule {}
