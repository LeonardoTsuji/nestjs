import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Fatura } from './fatura.entity';

@EntityRepository(Fatura)
export class FaturaRepository extends Repository<Fatura> {
  constructor(dataSource: DataSource) {
    super(Fatura, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Fatura[]> {
    return this.createQueryBuilder('fatura').getMany();
  }

  async salvar(fatura: Fatura): Promise<Fatura> {
    const newFatura = await this.create(fatura);

    await this.save(newFatura);

    return newFatura;
  }

  buscarPorCartaoIdEMesEAno(
    cartaoId: number,
    mes: number,
    ano: number,
  ): Promise<Fatura> {
    return this.createQueryBuilder('fatura')
      .where('fatura.cartao = :cartaoId', {
        cartaoId,
      })
      .andWhere('EXTRACT(MONTH FROM fatura.data) = :mes', { mes })
      .andWhere('EXTRACT(YEAR FROM fatura.data) = :ano', { ano })
      .getOne();
  }

  buscarPorId(id: number): Promise<Fatura> {
    return this.createQueryBuilder('fatura')
      .where('fatura.id = :id', {
        id,
      })
      .getOne();
  }
}
