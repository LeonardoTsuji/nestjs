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

@Entity()
export class Email {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'email',
  })
  email: string;

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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.emails, {
    nullable: false,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;
}
