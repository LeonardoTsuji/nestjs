import { Controller, Get, UseGuards } from '@nestjs/common';
import { EmailService } from './email.service';
import { Email } from './email.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/email')
@UseGuards(AuthGuard)
@ApiTags('Email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  buscarTodos(): Promise<Email[]> {
    return this.emailService.buscarTodos();
  }
}
