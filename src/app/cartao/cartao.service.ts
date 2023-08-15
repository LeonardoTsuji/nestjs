import { Injectable } from '@nestjs/common';
import { Cartao } from './cartao.entity';
import { CartaoRepository } from './cartao.repository';
import SalvarCartaoDTO from './dtos/SalvarCartao.dto';
import { BandeiraRepository } from './bandeira/bandeira.repository';
import { CartaoCategoriaRepository } from './cartaoCategoria/cartaoCategoria.repository';
import { PessoaRepository } from '../pessoa/pessoa.repository';

@Injectable()
export class CartaoService {
  constructor(
    private readonly cartaoRepository: CartaoRepository,
    private readonly bandeiraRepository: BandeiraRepository,
    private readonly cartaoCategoriaRepository: CartaoCategoriaRepository,
    private readonly pessoaRepository: PessoaRepository,
  ) {}

  buscarTodos(): Promise<Cartao[]> {
    return this.cartaoRepository.buscarTodos();
  }

  async salvar(body: SalvarCartaoDTO): Promise<Cartao> {
    const bandeira = await this.bandeiraRepository.buscarPorCodigo(
      body.bandeira,
    );
    const cartaoCategoria =
      await this.cartaoCategoriaRepository.buscarPorCodigo(
        body.cartaoCategoria,
      );
    const pessoa = await this.pessoaRepository.buscarPorId(1);

    const newCartao = new Cartao();
    newCartao.ativo = body.ativo;
    newCartao.bandeira = bandeira;
    newCartao.cartaoCategoria = cartaoCategoria;
    newCartao.pessoa = pessoa;
    newCartao.dataFechamento = body.dataFechamento;
    newCartao.dataVencimento = body.dataVencimento;
    newCartao.descricao = body.descricao;
    newCartao.limite = body.limite;

    return this.cartaoRepository.salvar(newCartao);
  }
}
