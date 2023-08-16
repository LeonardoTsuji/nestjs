import { BadRequestException, Injectable } from '@nestjs/common';
import { Conta } from './conta.entity';
import { SalvarContaDTO } from './dtos/SalvarContaDTO.dto';
import { ContaRepository } from './conta.repository';
import { BancoRepository } from './banco/banco.repository';
import { ContaCategoriaRepository } from './contaCategoria/contaCategoria.repository';
import { PessoaRepository } from '../pessoa/pessoa.repository';
import { AtualizarContaDTO } from './dtos/AtualizarContaDTO.dto';
import { ContaCategoria } from './contaCategoria/contaCategoria.entity';
import { Banco } from './banco/banco.entity';

@Injectable()
export class ContaService {
  private readonly PESSOA_ID = 1;

  constructor(
    private readonly contaRepository: ContaRepository,
    private readonly contaCategoriaRepository: ContaCategoriaRepository,
    private readonly bancoRepository: BancoRepository,
    private readonly pessoaRepository: PessoaRepository,
  ) {}

  buscarTodos(): Promise<Conta[]> {
    return this.contaRepository.buscarTodos();
  }

  async salvar(body: SalvarContaDTO): Promise<Conta> {
    const banco = await this.bancoRepository.buscarPorCodigo(body.banco);
    if (!banco) throw new BadRequestException('Banco inválido');

    const contaCategoria = await this.contaCategoriaRepository.buscarPorCodigo(
      body.contaCategoria,
    );
    if (!contaCategoria)
      throw new BadRequestException('Conta categoria inválida');

    const pessoa = await this.pessoaRepository.buscarPorId(this.PESSOA_ID);
    if (!pessoa) throw new BadRequestException('Pessoa inválida');

    const newConta = new Conta();
    newConta.ativo = body.ativo;
    newConta.banco = banco;
    newConta.contaCategoria = contaCategoria;
    newConta.pessoa = pessoa;
    newConta.descricao = body.descricao;

    return this.contaRepository.salvar(newConta);
  }

  async buscarPorIdEPessoaId(id: number): Promise<Conta> {
    const conta = await this.contaRepository.buscarPorIdEPessoaId(
      id,
      this.PESSOA_ID,
    );

    return conta;
  }

  async atualizar(id: number, body: AtualizarContaDTO): Promise<Conta> {
    let banco: Banco;
    let contaCategoria: ContaCategoria;

    if (body.banco) {
      banco = await this.bancoRepository.buscarPorCodigo(body.banco);
      if (!banco) throw new BadRequestException('Banco inválido');
    }

    if (body.contaCategoria) {
      contaCategoria = await this.contaCategoriaRepository.buscarPorCodigo(
        body.contaCategoria,
      );
      if (!contaCategoria)
        throw new BadRequestException('Conta categoria inválida');
    }

    const pessoa = await this.pessoaRepository.buscarPorId(this.PESSOA_ID);
    if (!pessoa) throw new BadRequestException('Pessoa inválida');

    const conta = await this.buscarPorIdEPessoaId(id);

    if (!conta) throw new BadRequestException('Conta inválida');

    conta.ativo = body.ativo || conta.ativo;
    conta.banco = banco || conta.banco;
    conta.contaCategoria = contaCategoria || conta.contaCategoria;
    conta.pessoa = pessoa;
    conta.descricao = body.descricao || conta.descricao;

    return this.contaRepository.atualizar(conta);
  }

  async excluir(id: number): Promise<void> {
    const pessoa = await this.pessoaRepository.buscarPorId(this.PESSOA_ID);
    if (!pessoa) throw new BadRequestException('Pessoa inválida');

    const conta = await this.contaRepository.buscarPorIdEPessoaId(
      id,
      pessoa.id,
    );

    if (!conta) throw new BadRequestException('Conta inválida');

    await this.contaRepository.excluir(conta);
  }
}
