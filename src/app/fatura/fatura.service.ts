import { Injectable } from '@nestjs/common';
import { Fatura } from './fatura.entity';
import { FaturaRepository } from './fatura.repository';

@Injectable()
export class FaturaService {
  constructor(private readonly faturaRepository: FaturaRepository) {}

  buscarTodos(): Promise<Fatura[]> {
    return this.faturaRepository.buscarTodos();
  }

  salvar(fatura: Fatura): Promise<Fatura> {
    return this.faturaRepository.salvar(fatura);
  }

  buscarPorCartaoIdEMesEAno(
    cartaoId: number,
    mes: number,
    ano: number,
  ): Promise<Fatura> {
    return this.faturaRepository.buscarPorCartaoIdEMesEAno(cartaoId, mes, ano);
  }
}
