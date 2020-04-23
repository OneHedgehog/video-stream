import {Body, CacheInterceptor, Controller, Get, Post, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(
      private readonly appService: AppService
  ) {}

  @Get('/auth/login')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/auth/register')
  postRegisterUser(@Body() user): string {
    return JSON.stringify(user);
  }
}
