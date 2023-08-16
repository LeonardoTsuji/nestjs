import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, ValidateIf } from 'class-validator';

export default class AtualizarCategoriaDTO {
  @ApiProperty()
  @IsOptional()
  codigo?: string;

  @ApiProperty()
  @IsOptional()
  descricao?: string;

  @ApiProperty()
  @IsOptional()
  tipo?: string;

  @ApiProperty()
  @IsOptional()
  cor?: string;

  @ApiProperty()
  @IsOptional()
  essencial?: boolean;

  @ApiProperty()
  @IsOptional()
  ativo?: boolean;
}
