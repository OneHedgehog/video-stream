import {CacheInterceptor, Get, Injectable, UseInterceptors} from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World f!';
  }
}
