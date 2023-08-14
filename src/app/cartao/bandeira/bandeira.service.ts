import { Injectable } from '@nestjs/common';
import { Bandeira } from './bandeira.entity';
import { BandeiraRepository } from './bandeira.repository';

@Injectable()
export class BandeiraService {
  constructor(private readonly bandeiraRepository: BandeiraRepository) {}
  buscarTodos(): Promise<Bandeira[]> {
    return this.bandeiraRepository.buscarTodos();
  }
}
