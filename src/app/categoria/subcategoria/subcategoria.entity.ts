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
import { Categoria } from '../categoria.entity';

@Entity()
export class Subcategoria {
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

  @ManyToOne(() => Categoria, (categoria) => categoria.subcategorias, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;
}
