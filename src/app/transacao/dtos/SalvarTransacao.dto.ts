import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsNotEmpty } from 'class-validator';

export default class SalvarTransacaoDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'descricao é obrigatória',
  })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'data é obrigatória',
  })
  data: Date;

  @ApiProperty()
  @IsNotEmpty({
    message: 'valor é obrigatória',
  })
  valor: number;

  @ApiProperty()
  @IsOptional()
  totalParcelas?: number;

  @ApiProperty()
  @IsOptional()
  parcela?: number;

  @ApiProperty()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true || value === 1)
  recorrente?: boolean = false;

  @ApiProperty()
  @IsNotEmpty({
    message: 'categoria é obrigatório',
  })
  categoria: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'cartao é obrigatório',
  })
  cartao: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'fatura é obrigatória',
  })
  fatura: number;
}
