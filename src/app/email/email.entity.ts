import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class Email {
  @PrimaryColumn()
  id: number;

  @Column({
    name: 'email',
  })
  email: string;

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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.emails, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;
}
