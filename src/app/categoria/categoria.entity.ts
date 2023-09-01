import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Subcategoria } from './subcategoria/subcategoria.entity';
import { Transacao } from '../transacao/transacao.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn({ name: 'id' })
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
    name: 'tipo',
  })
  tipo: string;

  @Column({
    name: 'cor',
  })
  cor: string;

  @Column({ name: 'essencial', default: true })
  essencial: boolean;

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

  @OneToMany(() => Subcategoria, (subcategoria) => subcategoria.categoria, {
    cascade: true,
  })
  subcategorias: Subcategoria[];

  @OneToMany(() => Transacao, (transacao) => transacao.categoria, {
    cascade: true,
  })
  transacoes: Transacao[];
}
