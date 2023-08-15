import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class SalvarCartaoDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'descricao é obrigatória' })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'limite é obrigatória' })
  limite: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'dataFechamento é obrigatória' })
  dataFechamento: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'dataVencimento é obrigatória' })
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
