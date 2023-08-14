import { Controller, Get, UseGuards } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { Cartao } from './cartao.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/cartao')
@UseGuards(AuthGuard)
@ApiTags('Cartao')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Get()
  buscarTodos(): Promise<Cartao[]> {
    return this.cartaoService.buscarTodos();
  }
}
