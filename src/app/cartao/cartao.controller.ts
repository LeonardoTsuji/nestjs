import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartaoService } from './cartao.service';
import { Cartao } from './cartao.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import SalvarCartaoDTO from './dtos/SalvarCartao.dto';
import AtualizarCartaoDTO from './dtos/AtualizarCartao.dto';

@Controller('/cartao')
@UseGuards(AuthGuard)
@ApiTags('Cartao')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Get()
  buscarTodos(@Request() request: Request): Promise<Cartao[]> {
    return this.cartaoService.buscarPorUsuarioId(request['usuarioId']);
  }

  @Get(':id')
  buscarPorIdEPessoaId(@Param('id') id: number): Promise<Cartao> {
    return this.cartaoService.buscarPorIdEPessoaId(id);
  }

  @Post()
  salvar(@Body() body: SalvarCartaoDTO): Promise<Cartao> {
    return this.cartaoService.salvar(body);
  }

  @Put(':id')
  atualizar(
    @Param('id') id: number,
    @Body() body: AtualizarCartaoDTO,
  ): Promise<Cartao> {
    return this.cartaoService.atualizar(id, body);
  }

  @Delete(':id')
  async excluir(@Param('id') id: number): Promise<void> {
    await this.cartaoService.excluir(id);
  }
}
