import { CartaoCategoria } from 'src/app/cartao/cartaoCategoria/cartaoCategoria.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCartaoCategoria1691781157121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(CartaoCategoria)
      .values([
        {
          codigo: 'CREDITO',
          descricao: 'Credito',
        },
        {
          codigo: 'DEBITO',
          descricao: 'Debito',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
