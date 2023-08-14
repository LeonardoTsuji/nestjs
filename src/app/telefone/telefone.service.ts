import { Injectable } from '@nestjs/common';
import { Telefone } from './telefone.entity';
import { TelefoneRepository } from './telefone.repository';

@Injectable()
export class TelefoneService {
  constructor(private readonly telefoneRepository: TelefoneRepository) {}
  buscarTodos(): Promise<Telefone[]> {
    return this.telefoneRepository.buscarTodos();
  }
}
