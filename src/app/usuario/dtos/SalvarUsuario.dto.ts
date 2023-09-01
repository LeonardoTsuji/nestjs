import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ValidarDocumento, removerCaracteresEspeciais } from 'src/utils/util';

export default class SalvarUsuarioDTO {
  @ApiProperty({
    name: 'login',
    required: true,
  })
  @IsNotEmpty({
    message: 'login é obrigatório',
  })
  login: string;

  @ApiProperty({
    name: 'nome',
    required: true,
  })
  @IsNotEmpty({
    message: 'nome é obrigatório',
  })
  nome: string;

  @Transform(({ value }) => removerCaracteresEspeciais(value))
  @ValidarDocumento('CPF', {
    message: 'O documento informado deve ser um CPF válido',
  })
  @ApiProperty({
    name: 'cpf',
    required: true,
  })
  @IsNotEmpty({
    message: 'cpf é obrigatório',
  })
  cpf: string;

  @ApiProperty({
    name: 'idExterno',
    required: true,
  })
  @IsNotEmpty({
    message: 'idExterno é obrigatório',
  })
  idExterno: string;
}
