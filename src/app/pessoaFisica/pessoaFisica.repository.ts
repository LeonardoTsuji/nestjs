import { DataSource, EntityRepository, Repository } from 'typeorm';
import { PessoaFisica } from './pessoaFisica.entity';

@EntityRepository(PessoaFisica)
export class PessoaFisicaRepository extends Repository<PessoaFisica> {
  constructor(dataSource: DataSource) {
    super(PessoaFisica, dataSource.createEntityManager());
  }

  buscarTodos(): Promise<PessoaFisica[]> {
    return this.createQueryBuilder('pessoaFisica').getMany();
  }

  buscarPorNome(nome: string): Promise<PessoaFisica> {
    return this.createQueryBuilder('pessoaFisica')
      .where('nome = :nome', {
        nome,
      })
      .getOne();
  }

  async salvar(pessoaFisica: PessoaFisica): Promise<PessoaFisica> {
    const newPessoaFisica = await this.create(pessoaFisica);

    return await this.save(newPessoaFisica);
  }
}
