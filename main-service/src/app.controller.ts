import {Body, CacheInterceptor, Controller, Get, Post, Req, Res, UseInterceptors} from '@nestjs/common';
import {AppService} from './app.service';
import {UserService} from "./services/user.service";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly userService: UserService
    ) {
    }

    @Get('/auth/login')
    getHello(): string {
        return this.appService.getHello();
    }

    @Post('/auth/register')
    async postRegisterUser(@Body() user) {
     return this.userService.authenticate(user).pipe(
         catchError( () => of(JSON.stringify(user)))
     );
    }
}
