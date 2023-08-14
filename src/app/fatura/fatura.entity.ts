import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Cartao } from '../cartao/cartao.entity';
import { Transacao } from '../transacao/transacao.entity';

@Entity()
export class Fatura {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'data',
  })
  data: number;

  @Column({
    name: 'data_fechamento',
  })
  dataFechamento: number;

  @Column({
    name: 'data_abertura',
  })
  dataAbertura: number;

  @Column({
    name: 'valor',
  })
  valor: number;

  @Column({
    name: 'valor_pago',
  })
  valorPago: number;

  @Column({
    name: 'saldo',
  })
  saldo: number;

  @Column({
    name: 'saldo_anterior',
  })
  saldoAnterior: number;

  @Column({
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => Cartao, (cartao) => cartao.faturas, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'cartao_id' })
  cartao: Cartao;

  @OneToMany(() => Transacao, (transacao) => transacao.cartao, {
    cascade: true,
  })
  transacoes: Transacao[];
}