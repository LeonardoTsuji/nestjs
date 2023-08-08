import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { Roles } from './app/role/role';
import { Role } from './app/role/role.enum';
import { RolesGuard } from './guards/role.guard';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles(Role.Writer)
  @UseGuards(AuthGuard, RolesGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
