import { ContaCategoria } from 'src/app/conta/contaCategoria/contaCategoria.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedContaCategoria1691781170006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(ContaCategoria)
      .values([
        {
          codigo: 'CORRENTE',
          descricao: 'Corrente',
        },
        {
          codigo: 'POUPANCA',
          descricao: 'Poupanca',
        },
        {
          codigo: 'OUTROS',
          descricao: 'Outros',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
