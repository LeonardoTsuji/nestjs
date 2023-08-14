import {
  MigrationInterface,
  QueryRunner,
  Table,
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
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'data_fechamento',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'data_abertura',
            type: 'timestamp',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('fatura', 'fatura_cartao');
    await queryRunner.dropTable('fatura');
  }
}
