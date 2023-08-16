import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AtualizarContaDTO {
  @ApiProperty()
  @IsOptional()
  descricao?: string;

  @ApiProperty()
  @IsOptional()
  ativo?: boolean;

  @ApiProperty()
  @IsOptional()
  contaCategoria?: string;

  @ApiProperty()
  @IsOptional()
  banco?: string;
}
