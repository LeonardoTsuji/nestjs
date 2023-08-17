import { BadRequestException, Injectable } from '@nestjs/common';
import { Cartao } from './cartao.entity';
import { CartaoRepository } from './cartao.repository';
import SalvarCartaoDTO from './dtos/SalvarCartao.dto';
import { BandeiraRepository } from './bandeira/bandeira.repository';
import { CartaoCategoriaRepository } from './cartaoCategoria/cartaoCategoria.repository';
import { PessoaRepository } from '../pessoa/pessoa.repository';
import { Bandeira } from './bandeira/bandeira.entity';
import { CartaoCategoria } from './cartaoCategoria/cartaoCategoria.entity';
import AtualizarCartaoDTO from './dtos/AtualizarCartao.dto';
import { converterEmCentavos } from 'src/utils/util';

@Injectable()
export class CartaoService {
  private readonly PESSOA_ID = 1;

  constructor(
    private readonly cartaoRepository: CartaoRepository,
    private readonly bandeiraRepository: BandeiraRepository,
    private readonly cartaoCategoriaRepository: CartaoCategoriaRepository,
    private readonly pessoaRepository: PessoaRepository,
  ) {}

  buscarTodos(): Promise<Cartao[]> {
    return this.cartaoRepository.buscarTodos();
  }

  async buscarPorIdEPessoaId(id: number): Promise<Cartao> {
    const cartao = await this.cartaoRepository.buscarPorIdEPessoaId(
      id,
      this.PESSOA_ID,
    );

    if (!cartao) throw new BadRequestException('Cartão inválido');

    return cartao;
  }

  async salvar(body: SalvarCartaoDTO): Promise<Cartao> {
    const bandeira = await this.bandeiraRepository.buscarPorCodigo(
      body.bandeira,
    );
    if (!bandeira) throw new BadRequestException('Bandeira inválida');

    const cartaoCategoria =
      await this.cartaoCategoriaRepository.buscarPorCodigo(
        body.cartaoCategoria,
      );
    if (!cartaoCategoria)
      throw new BadRequestException('Cartão categoria inválida');

    const pessoa = await this.pessoaRepository.buscarPorId(this.PESSOA_ID);
    if (!pessoa) throw new BadRequestException('Pessoa inválida');

    const newCartao = new Cartao();
    newCartao.ativo = body.ativo;
    newCartao.bandeira = bandeira;
    newCartao.cartaoCategoria = cartaoCategoria;
    newCartao.pessoa = pessoa;
    newCartao.dataFechamento = body.dataFechamento;
    newCartao.dataVencimento = body.dataVencimento;
    newCartao.descricao = body.descricao;
    newCartao.limite = converterEmCentavos(body.limite);

    return this.cartaoRepository.salvar(newCartao);
  }

  async atualizar(id: number, body: AtualizarCartaoDTO): Promise<Cartao> {
    let bandeira: Bandeira;
    let cartaoCategoria: CartaoCategoria;

    if (body.bandeira) {
      bandeira = await this.bandeiraRepository.buscarPorCodigo(body.bandeira);
      if (!bandeira) throw new BadRequestException('Bandeira inválida');
    }

    if (body.cartaoCategoria) {
      cartaoCategoria = await this.cartaoCategoriaRepository.buscarPorCodigo(
        body.cartaoCategoria,
      );
      if (!cartaoCategoria)
        throw new BadRequestException('Cartão categoria inválida');
    }

    const pessoa = await this.pessoaRepository.buscarPorId(this.PESSOA_ID);
    if (!pessoa) throw new BadRequestException('Pessoa inválida');

    const cartao = await this.cartaoRepository.buscarPorIdEPessoaId(
      id,
      pessoa.id,
    );
    if (!cartao) throw new BadRequestException('Cartao inválida');

    cartao.ativo = body.ativo || cartao.ativo;
    cartao.bandeira = bandeira || cartao.bandeira;
    cartao.cartaoCategoria = cartaoCategoria || cartao.cartaoCategoria;
    cartao.pessoa = pessoa;
    cartao.descricao = body.descricao || cartao.descricao;
    cartao.limite = converterEmCentavos(body.limite) || cartao.limite;
    cartao.dataFechamento = body.dataFechamento || cartao.dataFechamento;
    cartao.dataVencimento = body.dataVencimento || cartao.dataVencimento;

    return this.cartaoRepository.atualizar(cartao);
  }

  async excluir(id: number): Promise<void> {
    const pessoa = await this.pessoaRepository.buscarPorId(this.PESSOA_ID);
    if (!pessoa) throw new BadRequestException('Pessoa inválida');

    const cartao = await this.cartaoRepository.buscarPorIdEPessoaId(
      id,
      pessoa.id,
    );

    if (!cartao) throw new BadRequestException('Cartão inválido');

    await this.cartaoRepository.excluir(cartao);
  }
}
