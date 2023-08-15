import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableCheck,
  TableForeignKey,
} from 'typeorm';

export class EstruturaFatura1691855929212 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fatura',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'data',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'data_fechamento',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'data_abertura',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'valor',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'valor_pago',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'saldo',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'saldo_anterior',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'cartao_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'fatura',
      new TableForeignKey({
        name: 'fatura_cartao',
        columnNames: ['cartao_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cartao',
      }),
    );

    await queryRunner.query(
      `ALTER TABLE "fatura" ADD CONSTRAINT "UQ_data_cartao_id" UNIQUE ("data", "cartao_id")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('fatura', 'fatura_cartao');
    await queryRunner.query(
      `ALTER TABLE "fatura" DROP CONSTRAINT "UQ_data_cartao_id"`,
    );

    await queryRunner.dropTable('fatura');
  }
}
