import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export default class SalvarCartaoDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'descricao é obrigatória' })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'limite é obrigatória' })
  @IsNumber(
    {},
    {
      message: 'limite deve ser um número',
    },
  )
  limite: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'dataFechamento é obrigatória' })
  @IsNumber(
    {},
    {
      message: 'dataFechamento deve ser um número',
    },
  )
  dataFechamento: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'dataVencimento é obrigatória' })
  @IsNumber(
    {},
    {
      message: 'dataVencimento deve ser um número',
    },
  )
  dataVencimento: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'ativo é obrigatória' })
  ativo: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'cartaoCategoria é obrigatória' })
  cartaoCategoria: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'bandeira é obrigatória' })
  bandeira: string;
}
