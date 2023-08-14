import { Column, Entity, JoinColumn, PrimaryColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class UsuarioPessoa {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;
}
