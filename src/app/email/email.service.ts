import { Injectable } from '@nestjs/common';
import { Email } from './email.entity';
import { EmailRepository } from './email.repository';

@Injectable()
export class EmailService {
  constructor(private readonly emailRepository: EmailRepository) {}
  buscarTodos(): Promise<Email[]> {
    return this.emailRepository.buscarTodos();
  }
}
