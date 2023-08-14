import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class EstruturaConta1691763772804 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'banco',
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
        name: 'conta_categoria',
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
        name: 'conta',
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
            name: 'conta_categoria_id',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'banco_id',
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
      'conta',
      new TableForeignKey({
        name: 'conta_pessoa',
        columnNames: ['pessoa_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pessoa',
      }),
    );

    await queryRunner.createForeignKey(
      'conta',
      new TableForeignKey({
        name: 'conta_banco',
        columnNames: ['banco_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'banco',
      }),
    );

    await queryRunner.createForeignKey(
      'conta',
      new TableForeignKey({
        name: 'conta_conta_categoria',
        columnNames: ['conta_categoria_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'conta_categoria',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('conta', 'conta_pessoa');
    await queryRunner.dropForeignKey('conta', 'conta_banco');
    await queryRunner.dropForeignKey('conta', 'conta_conta_categoria');
    await queryRunner.dropTable('banco');
    await queryRunner.dropTable('conta_categoria');
    await queryRunner.dropTable('conta');
  }
}
