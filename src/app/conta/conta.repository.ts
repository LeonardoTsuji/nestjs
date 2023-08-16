import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Conta } from './conta.entity';

@EntityRepository(Conta)
export class ContaRepository extends Repository<Conta> {
  constructor(dataSource: DataSource) {
    super(Conta, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<Conta[]> {
    return this.createQueryBuilder('conta').getMany();
  }

  async salvar(conta: Conta): Promise<Conta> {
    const newConta = await this.create(conta);

    await this.save(newConta);

    return newConta;
  }

  buscarPorIdEPessoaId(id: number, pessoaId: number): Promise<Conta> {
    return this.createQueryBuilder('conta')
      .where('conta.id = :id', { id })
      .andWhere('conta.pessoa = :pessoaId', {
        pessoaId,
      })
      .getOne();
  }

  async atualizar(conta: Conta): Promise<Conta> {
    return this.save(conta);
  }

  async excluir(conta: Conta): Promise<void> {
    await this.softRemove(conta);
  }
}
