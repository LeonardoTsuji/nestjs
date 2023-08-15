import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './app/pessoa/pessoa.module';
import { JobsModule } from './app/services/jobs/jobs.module';
import DatabaseOptions from './database/typeorm/database';
import { PessoaFisicaModule } from './app/pessoaFisica/pessoaFisica.module';
import { CartaoModule } from './app/cartao/cartao.module';
import { ContaModule } from './app/conta/conta.module';
import { UsuarioModule } from './app/usuario/usuario.module';
import { FaturaModule } from './app/fatura/fatura.module';
import { TransacaoModule } from './app/transacao/transacao.module';
import { CategoriaModule } from './app/categoria/categoria.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DatabaseOptions],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    ScheduleModule.forRoot(),
    PessoaModule,
    PessoaFisicaModule,
    UsuarioModule,
    JobsModule,
    CartaoModule,
    ContaModule,
    CategoriaModule,
    FaturaModule,
    TransacaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
