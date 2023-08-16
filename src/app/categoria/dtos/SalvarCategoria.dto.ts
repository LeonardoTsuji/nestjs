import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class SalvarCategoriaDTO {
  @ApiProperty()
  @IsNotEmpty({
    message: 'codigo é obrigatório',
  })
  codigo: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'descricao é obrigatório',
  })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'tipo é obrigatório',
  })
  tipo: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'cor é obrigatório',
  })
  cor: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'essencial é obrigatório',
  })
  essencial: boolean;
}
