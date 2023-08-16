import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SalvarContaDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'descricao é obrigatória' })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'ativo é obrigatória' })
  ativo: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'contaCategoria é obrigatória' })
  contaCategoria: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'banco é obrigatório' })
  banco: string;
}
