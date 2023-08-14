import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Subcategoria } from './subcategoria/subcategoria.entity';
import { Transacao } from '../transacao/transacao.entity';

@Entity()
export class Categoria {
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

  @Column({ name: 'essencial', default: true })
  essencial: boolean;

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

  @OneToMany(() => Subcategoria, (subcategoria) => subcategoria.categoria, {
    cascade: true,
  })
  subcategorias: Subcategoria[];

  @OneToMany(() => Transacao, (transacao) => transacao.categoria, {
    cascade: true,
  })
  transacoes: Transacao[];
}
