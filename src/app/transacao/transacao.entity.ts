import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Cartao } from '../cartao/cartao.entity';
import { Categoria } from '../categoria/categoria.entity';
import { Fatura } from '../fatura/fatura.entity';

@Entity()
export class Transacao {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'descricao',
  })
  descricao: string;

  @Column({
    name: 'data',
  })
  data: number;

  @Column({
    name: 'valor',
  })
  valor: number;

  @Column({
    name: 'total_parcelas',
  })
  totalParcelas: number;

  @Column({
    name: 'parcela',
  })
  parcela: number;

  @Column({
    name: 'recorrente',
  })
  recorrente: boolean;

  @Column({
    name: 'pago',
  })
  pago: boolean;

  @Column({
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
  })
  updatedAt: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.transacoes, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;

  @ManyToOne(() => Cartao, (cartao) => cartao.transacoes, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'cartao_id' })
  cartao: Cartao;

  @ManyToOne(() => Fatura, (fatura) => fatura.transacoes, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'cartao_fatura_id' })
  fatura: Fatura;

  @ManyToOne(() => Cartao, (cartao) => cartao.transacoes, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'cartao_pago_id' })
  cartaoPagamento: Cartao;

  @ManyToOne(() => Fatura, (fatura) => fatura.transacoes, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'cartao_fatura_paga_id' })
  faturaPagamento: Fatura;
}