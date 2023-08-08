import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;
}
