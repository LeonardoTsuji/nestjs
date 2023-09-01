import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsuarioPessoa } from '../usuarioPessoa/usuarioPessoa.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'login',
  })
  login: string;

  @Column({
    name: 'ativo',
  })
  ativo: boolean;

  @Column({
    name: 'id_externo',
  })
  idExterno: string;

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

  @OneToMany(() => UsuarioPessoa, (usuarioPessoa) => usuarioPessoa.usuario)
  usuarioPessoa: UsuarioPessoa[];
}
