import { Controller, Get, UseGuards } from '@nestjs/common';
import { TelefoneService } from './telefone.service';
import { Telefone } from './telefone.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/telefone')
@UseGuards(AuthGuard)
@ApiTags('Telefone')
export class TelefoneController {
  constructor(private readonly telefoneService: TelefoneService) {}

  @Get()
  buscarTodos(): Promise<Telefone[]> {
    return this.telefoneService.buscarTodos();
  }
}
