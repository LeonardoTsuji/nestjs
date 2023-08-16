import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class UsuarioPessoa {
  @PrimaryColumn()
  id: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;
}
