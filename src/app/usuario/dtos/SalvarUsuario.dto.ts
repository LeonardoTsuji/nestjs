import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export default class SalvarUsuarioDTO {
  @ApiProperty({
    name: 'login',
    required: true,
  })
  @IsNotEmpty({
    message: 'login é obrigatório',
  })
  login: string;
}
