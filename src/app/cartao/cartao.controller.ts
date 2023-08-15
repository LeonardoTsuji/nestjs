import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartaoService } from './cartao.service';
import { Cartao } from './cartao.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import SalvarCartaoDTO from './dtos/SalvarCartao.dto';

@Controller('/cartao')
@UseGuards(AuthGuard)
@ApiTags('Cartao')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Get()
  buscarTodos(): Promise<Cartao[]> {
    return this.cartaoService.buscarTodos();
  }

  @Post()
  salvar(@Body() body: SalvarCartaoDTO): Promise<Cartao> {
    return this.cartaoService.salvar(body);
  }
}
