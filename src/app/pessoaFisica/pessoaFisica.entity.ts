import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';

@Entity()
export class PessoaFisica {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

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

  @OneToOne(() => Pessoa, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;
}
