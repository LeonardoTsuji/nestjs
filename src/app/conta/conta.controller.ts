import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta } from './conta.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import { SalvarContaDTO } from './dtos/SalvarContaDTO.dto';
import { AtualizarContaDTO } from './dtos/AtualizarContaDTO.dto';

@Controller('/conta')
@UseGuards(AuthGuard)
@ApiTags('Conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Get()
  buscarTodos(): Promise<Conta[]> {
    return this.contaService.buscarTodos();
  }

  @Get(':id')
  buscarPorIdEPessoaId(@Param('id') id: number): Promise<Conta> {
    return this.contaService.buscarPorIdEPessoaId(id);
  }

  @Post()
  salvar(@Body() body: SalvarContaDTO): Promise<Conta> {
    return this.contaService.salvar(body);
  }

  @Put(':id')
  atualizar(
    @Param('id') id: number,
    @Body() body: AtualizarContaDTO,
  ): Promise<Conta> {
    return this.contaService.atualizar(id, body);
  }

  @Delete(':id')
  async excluir(@Param('id') id: number): Promise<void> {
    await this.contaService.excluir(id);
  }
}
