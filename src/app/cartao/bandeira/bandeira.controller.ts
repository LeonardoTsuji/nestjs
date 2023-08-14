import { Controller, Get, UseGuards } from '@nestjs/common';
import { BandeiraService } from './bandeira.service';
import { Bandeira } from './bandeira.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/bandeira')
@UseGuards(AuthGuard)
@ApiTags('Bandeira')
export class BandeiraController {
  constructor(private readonly bandeiraService: BandeiraService) {}

  @Get()
  buscarTodos(): Promise<Bandeira[]> {
    return this.bandeiraService.buscarTodos();
  }
}
