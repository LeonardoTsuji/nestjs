import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class PessoaFisica {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

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
