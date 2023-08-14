import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';
import { Banco } from './banco/banco.entity';
import { ContaCategoria } from './contaCategoria/contaCategoria.entity';

@Entity()
export class Conta {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'descricao',
  })
  descricao: string;

  @Column({ name: 'ativo', default: true })
  ativo: boolean;

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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.contas, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;

  @ManyToOne(() => Banco, (banco) => banco.contas, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'banco_id' })
  banco: Banco;

  @ManyToOne(() => ContaCategoria, (contaCategoria) => contaCategoria.contas, {
    nullable: false,
  })
  @JoinColumn({ name: 'conta_categoria_id' })
  contaCategoria: ContaCategoria;
}
