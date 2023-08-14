import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';
import { CartaoCategoria } from './cartaoCategoria/cartaoCategoria.entity';
import { Bandeira } from './bandeira/bandeira.entity';
import { Fatura } from '../fatura/fatura.entity';
import { Transacao } from '../transacao/transacao.entity';

@Entity()
export class Cartao {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'descricao',
  })
  descricao: string;

  @Column({
    name: 'limite',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  limite: number;

  @Column({
    name: 'data_fechamento',
  })
  dataFechamento: number;

  @Column({
    name: 'data_vencimento',
  })
  dataVencimento: number;

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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.cartoes, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;

  @ManyToOne(
    () => CartaoCategoria,
    (cartaoCategoria) => cartaoCategoria.cartoes,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'cartao_categoria_id' })
  cartaoCategoria: CartaoCategoria;

  @ManyToOne(() => Bandeira, (bandeira) => bandeira.cartoes, {
    nullable: false,
  })
  @JoinColumn({ name: 'bandeira_id' })
  bandeira: Bandeira;

  @OneToMany(() => Fatura, (fatura) => fatura.cartao, {
    cascade: true,
  })
  faturas: Fatura[];

  @OneToMany(() => Transacao, (transacao) => transacao.cartao, {
    cascade: true,
  })
  transacoes: Transacao[];
}