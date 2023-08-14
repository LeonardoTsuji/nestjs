import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Categoria } from '../categoria.entity';

@Entity()
export class Subcategoria {
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

  @ManyToOne(() => Categoria, (categoria) => categoria.subcategorias, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;
}
