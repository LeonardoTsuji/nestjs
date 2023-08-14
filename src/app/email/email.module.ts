import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { Email } from './email.entity';
import { EmailRepository } from './email.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Email])],
  controllers: [EmailController],
  providers: [EmailService, EmailRepository],
  exports: [EmailService],
})
export class EmailModule {}
