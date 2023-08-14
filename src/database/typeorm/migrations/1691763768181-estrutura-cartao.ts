import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class EstruturaCartao1691763768181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bandeira',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'codigo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'descricao',
            type: 'varchar',
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

          {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'cartao_categoria',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'codigo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'descricao',
            type: 'varchar',
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

          {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'cartao',
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
            name: 'limite',
            type: 'numeric(10,2)',
            isNullable: false,
          },
          {
            name: 'data_fechamento',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'data_vencimento',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'ativo',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'pessoa_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'cartao_categoria_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'bandeira_id',
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

          {
            name: 'deleted_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'cartao',
      new TableForeignKey({
        name: 'cartao_pessoa',
        columnNames: ['pessoa_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pessoa',
      }),
    );

    await queryRunner.createForeignKey(
      'cartao',
      new TableForeignKey({
        name: 'cartao_bandeira',
        columnNames: ['bandeira_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'bandeira',
      }),
    );

    await queryRunner.createForeignKey(
      'cartao',
      new TableForeignKey({
        name: 'cartao_cartao_categoria',
        columnNames: ['cartao_categoria_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cartao_categoria',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('cartao', 'cartao_pessoa');
    await queryRunner.dropForeignKey('cartao', 'cartao_bandeira');
    await queryRunner.dropForeignKey('cartao', 'cartao_cartao_categoria');
    await queryRunner.dropTable('bandeira');
    await queryRunner.dropTable('cartao_categoria');
    await queryRunner.dropTable('cartao');
  }
}
