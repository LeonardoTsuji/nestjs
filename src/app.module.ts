import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './app/pessoa/pessoa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseOptions from './config/database';
import { JobsModule } from './app/services/jobs/jobs.module';

@Module({
  imports: [JobsModule],
  // imports: [TypeOrmModule.forRoot(DatabaseOptions), PessoaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
