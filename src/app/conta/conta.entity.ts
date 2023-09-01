import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';
import { Banco } from './banco/banco.entity';
import { ContaCategoria } from './contaCategoria/contaCategoria.entity';

@Entity()
export class Conta {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'descricao',
  })
  descricao: string;

  @Column({ name: 'ativo', default: true })
  ativo: boolean;

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
