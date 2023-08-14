import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class EstruturaTransacao1691855934935 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transacao',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'descricao',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'data',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'valor',
            type: 'bigint',
            isNullable: false,
          },
          {
            name: 'total_parcelas',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'parcela',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'recorrente',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'pago',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'categoria_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'cartao_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'cartao_fatura_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'cartao_pago_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'cartao_fatura_paga_id',
            type: 'integer',
            isNullable: true,
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

          {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'transacao',
      new TableForeignKey({
        name: 'transacao_categoria',
        columnNames: ['categoria_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categoria',
      }),
    );

    await queryRunner.createForeignKey(
      'transacao',
      new TableForeignKey({
        name: 'transacao_cartao',
        columnNames: ['cartao_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cartao',
      }),
    );

    await queryRunner.createForeignKey(
      'transacao',
      new TableForeignKey({
        name: 'transacao_cartao_fatura',
        columnNames: ['cartao_fatura_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'fatura',
      }),
    );

    await queryRunner.createForeignKey(
      'transacao',
      new TableForeignKey({
        name: 'transacao_cartao_pago',
        columnNames: ['cartao_pago_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cartao',
      }),
    );

    await queryRunner.createForeignKey(
      'transacao',
      new TableForeignKey({
        name: 'transacao_cartao_fatura_paga',
        columnNames: ['cartao_fatura_paga_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'fatura',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('transacao', 'transacao_categoria');
    await queryRunner.dropForeignKey('transacao', 'transacao_cartao');
    await queryRunner.dropForeignKey('transacao', 'transacao_cartao_fatura');
    await queryRunner.dropForeignKey('transacao', 'transacao_cartao_pago');
    await queryRunner.dropForeignKey(
      'transacao',
      'transacao_cartao_fatura_paga',
    );
    await queryRunner.dropTable('transacao');
  }
}
