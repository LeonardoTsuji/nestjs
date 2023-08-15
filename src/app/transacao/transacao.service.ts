import { BadRequestException, Injectable } from '@nestjs/common';
import { Transacao } from './transacao.entity';
import { TransacaoRepository } from './transacao.repository';
import SalvarTransacaoDto from './dtos/SalvarTransacao.dto';
import { CartaoRepository } from '../cartao/cartao.repository';
import { CategoriaRepository } from '../categoria/categoria.repository';
import { FaturaRepository } from '../fatura/fatura.repository';

@Injectable()
export class TransacaoService {
  constructor(
    private readonly transacaoRepository: TransacaoRepository,
    private readonly cartaoRepository: CartaoRepository,
    private readonly categoriaRepository: CategoriaRepository,
    private readonly faturaRepository: FaturaRepository,
  ) {}

  buscarTodos(): Promise<Transacao[]> {
    return this.transacaoRepository.buscarTodos();
  }

  async salvar(body: SalvarTransacaoDto): Promise<Transacao> {
    const cartao = await this.cartaoRepository.buscarPorId(body.cartao);

    if (!cartao) throw new BadRequestException('Cartão inválido');

    const categoria = await this.categoriaRepository.buscarPorCodigo(
      body.categoria,
    );

    if (!categoria) throw new BadRequestException('Categoria inválida');

    const fatura = await this.faturaRepository.buscarPorId(body.fatura);

    if (!fatura) throw new BadRequestException('Fatura inválida');

    const transacao = new Transacao();

    transacao.data = body.data;
    transacao.valor = converterEmCentavos(body.valor);
    transacao.descricao = body.descricao;
    transacao.parcela = body.parcela;
    transacao.totalParcelas = body.totalParcelas;
    transacao.recorrente = body.recorrente;
    transacao.cartao = cartao;
    transacao.categoria = categoria;
    transacao.fatura = fatura;
    transacao.pago = false;

    return this.transacaoRepository.salvar(transacao);
  }
}
