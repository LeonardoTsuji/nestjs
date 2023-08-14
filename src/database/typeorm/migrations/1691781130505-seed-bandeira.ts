import { Bandeira } from 'src/app/cartao/bandeira/bandeira.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedBandeira1691781130505 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Bandeira)
      .values([
        {
          codigo: 'MASTERCARD',
          descricao: 'Mastercard',
        },
        {
          codigo: 'VISA',
          descricao: 'Visa',
        },
        {
          codigo: 'ELO',
          descricao: 'Elo',
        },
        {
          codigo: 'AMERICAN_EXPRESS',
          descricao: 'American Express',
        },
        {
          codigo: 'HIPERCARD',
          descricao: 'Hipercard',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
