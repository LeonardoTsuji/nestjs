import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class PessoaFisica {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({
    name: 'nome',
  })
  nome: string;

  @Column({
    name: 'cpf',
  })
  cpf: string;

  @Column({ name: 'pessoa_id' })
  pessoaId: number;

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

  @OneToOne(() => Pessoa, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;
}
