import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import moment from 'moment';
import { Cartao } from 'src/app/cartao/cartao.entity';
import { CartaoService } from 'src/app/cartao/cartao.service';
import { Fatura } from 'src/app/fatura/fatura.entity';
import { FaturaService } from 'src/app/fatura/fatura.service';

@Injectable()
export class CriaFaturaJob {
  constructor(
    private readonly logger: Logger,
    private readonly cartaoService: CartaoService,
    private readonly faturaService: FaturaService,
  ) {}

  criarFaturaMensal(ano: number, mes: number, cartao: Cartao): Fatura {
    const dia = cartao.dataVencimento;
    const dataAbertura = moment(`${ano}-${mes}-${dia}`).add(1, 'days');
    const dataFechamento = moment().date(dia).toDate();

    const fatura = new Fatura();
    fatura.cartao = cartao;
    fatura.data = moment(`${ano}-${mes}-${dia}`).toDate();
    fatura.dataAbertura = dataAbertura.toDate();
    fatura.dataFechamento = dataFechamento;
    fatura.valor = 0;
    fatura.valorPago = 0;
    fatura.saldo = 0;
    fatura.saldoAnterior = 0;

    return fatura;
  }

  @Cron(CronExpression.EVERY_6_MONTHS, {
    name: 'CriaFaturaJob',
  })
  async criar(): Promise<void> {
    this.logger.log(`Iniciando job ${CriaFaturaJob.name}`);
    const ano = Number(moment().format('YYYY'));
    const cartoes = await this.cartaoService.buscarTodos();

    cartoes.map(async (cartao) => {
      for (let mes = 1; mes <= 12; mes++) {
        const existeFatura = await this.faturaService.buscarPorCartaoIdEMesEAno(
          cartao.id,
          mes,
          ano,
        );

        if (!existeFatura) {
          const fatura = this.criarFaturaMensal(ano, mes, cartao);
          await this.faturaService.salvar(fatura);
        }
      }
    });

    await Promise.all(cartoes);
  }
}
