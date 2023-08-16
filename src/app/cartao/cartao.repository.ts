import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Cartao } from './cartao.entity';

@EntityRepository(Cartao)
export class CartaoRepository extends Repository<Cartao> {
  constructor(dataSource: DataSource) {
    super(Cartao, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Cartao[]> {
    return this.createQueryBuilder('cartao').getMany();
  }

  async salvar(cartao: Cartao): Promise<Cartao> {
    const newCartao = await this.create(cartao);

    await this.save(newCartao);

    return newCartao;
  }

  buscarPorId(id: number): Promise<Cartao> {
    return this.createQueryBuilder('cartao')
      .where('cartao.id = :id', {
        id,
      })
      .getOne();
  }

  buscarPorIdEPessoaId(id: number, pessoaId: number): Promise<Cartao> {
    return this.createQueryBuilder('cartao')
      .where('cartao.id = :id', { id })
      .andWhere('cartao.pessoa = :pessoaId', {
        pessoaId,
      })
      .getOne();
  }

  async atualizar(cartao: Cartao): Promise<Cartao> {
    return this.save(cartao);
  }

  async excluir(cartao: Cartao): Promise<void> {
    await this.softRemove(cartao);
  }
}
