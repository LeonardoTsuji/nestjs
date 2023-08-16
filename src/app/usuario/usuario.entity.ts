import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsuarioPessoa } from '../usuarioPessoa/usuarioPessoa.entity';

@Entity()
export class Usuario {
  @PrimaryColumn()
  id: number;

  @Column()
  login: string;

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
