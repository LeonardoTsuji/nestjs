import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, ValidateIf } from 'class-validator';

export default class AtualizarCartaoDTO {
  @ApiProperty()
  @IsOptional()
  descricao?: string;

  @ApiProperty()
  @IsNumber(
    {},
    {
      message: 'limite deve ser um número',
    },
  )
  @ValidateIf((object, value) => value)
  limite?: number;

  @ApiProperty()
  @IsNumber(
    {},
    {
      message: 'dataFechamento deve ser um número',
    },
  )
  @ValidateIf((object, value) => value)
  dataFechamento?: number;

  @ApiProperty()
  @IsNumber(
    {},
    {
      message: 'dataVencimento deve ser um número',
    },
  )
  @ValidateIf((object, value) => value)
  dataVencimento?: number;

  @ApiProperty()
  @IsOptional()
  ativo?: boolean;

  @ApiProperty()
  @IsOptional()
  cartaoCategoria?: string;

  @ApiProperty()
  @IsOptional()
  bandeira?: string;
}
