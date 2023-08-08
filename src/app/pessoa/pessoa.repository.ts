import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {
  buscarTodos(): Promise<Pessoa[]> {
    return this.createQueryBuilder('p').getMany();
  }

  buscarPorNome(nome: string): Promise<Pessoa> {
    return this.createQueryBuilder('p')
      .where('nome = :nome', {
        nome,
      })
      .getOne();
  }
}
