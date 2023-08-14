import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Cartao } from '../cartao.entity';

@Entity()
export class Bandeira {
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

  @OneToMany(() => Cartao, (cartao) => cartao.bandeira)
  cartoes: Cartao[];
}
