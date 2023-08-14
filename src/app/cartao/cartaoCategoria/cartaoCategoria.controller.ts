import { Controller, Get, UseGuards } from '@nestjs/common';
import { CartaoCategoriaService } from './cartaoCategoria.service';
import { CartaoCategoria } from './cartaoCategoria.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/cartaoCategoria')
@UseGuards(AuthGuard)
@ApiTags('CartaoCategoria')
export class CartaoCategoriaController {
  constructor(
    private readonly cartaoCategoriaService: CartaoCategoriaService,
  ) {}

  @Get()
  buscarTodos(): Promise<CartaoCategoria[]> {
    return this.cartaoCategoriaService.buscarTodos();
  }
}
