import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { PessoaFisica } from '../pessoaFisica/pessoaFisica.entity';
import { Email } from '../email/email.entity';
import { Telefone } from '../telefone/telefone.entity';
import { Conta } from '../conta/conta.entity';
import { Cartao } from '../cartao/cartao.entity';

@Entity()
export class Pessoa {
  @PrimaryColumn()
  id: number;

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
