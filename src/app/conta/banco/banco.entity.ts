import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Conta } from '../conta.entity';

@Entity()
export class Banco {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'codigo',
  })
  codigo: string;

  @Column({
    name: 'descricao',
  })
  descricao: string;

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

  @OneToMany(() => Conta, (conta) => conta.banco)
  contas: Conta[];
}
