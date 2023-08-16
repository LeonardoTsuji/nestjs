import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PessoaFisica } from '../pessoaFisica/pessoaFisica.entity';
import { Email } from '../email/email.entity';
import { Telefone } from '../telefone/telefone.entity';
import { Conta } from '../conta/conta.entity';
import { Cartao } from '../cartao/cartao.entity';

@Entity()
export class Pessoa {
  @PrimaryColumn()
  id: number;

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

  @OneToOne(() => PessoaFisica, (pessoaFisica) => pessoaFisica.pessoa)
  pessoaFisica: PessoaFisica;

  @OneToMany(() => Email, (email) => email.pessoa, {
    cascade: true,
  })
  emails: Email[];

  @OneToMany(() => Telefone, (telefone) => telefone.pessoa, {
    cascade: true,
  })
  telefones: Telefone[];

  @OneToMany(() => Conta, (conta) => conta.pessoa, {
    cascade: true,
  })
  contas: Conta[];

  @OneToMany(() => Cartao, (cartao) => cartao.pessoa, {
    cascade: true,
  })
  cartoes: Cartao[];
}
