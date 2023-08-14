import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UsuarioPessoa } from '../usuarioPessoa/usuarioPessoa.entity';

@Entity()
export class Usuario {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

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

  @OneToMany(() => UsuarioPessoa, (usuarioPessoa) => usuarioPessoa.usuario)
  usuarioPessoa: UsuarioPessoa[];
}
