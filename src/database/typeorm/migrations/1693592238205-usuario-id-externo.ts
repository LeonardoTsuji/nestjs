import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UsuarioIdExterno1693592238205 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'usuario',
      new TableColumn({
        name: 'id_externo',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('usuario', 'id_externo');
  }
}
