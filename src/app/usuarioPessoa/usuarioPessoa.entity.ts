import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class UsuarioPessoa {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'usuario_id',
  })
  usuarioId: number;

  @Column({
    name: 'pessoa_id',
  })
  pessoaId: number;

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
