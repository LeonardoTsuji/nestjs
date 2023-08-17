import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class BuscarUsuarioDTO {
  @ApiProperty()
  @IsOptional()
  login?: string;
}
