import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class Telefone {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'telefone',
  })
  numero: number;

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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.telefones, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;
}
