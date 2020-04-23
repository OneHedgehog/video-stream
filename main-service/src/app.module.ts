import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {APP_INTERCEPTOR} from "@nestjs/core";
import * as redisStore from 'cache-manager-redis-store';
import {HttpCacheInterceptor} from "./interceptors/http-cache.interceptor";

@Module({
    imports: [
        CacheModule.register({
            store: redisStore,
            host: 'redis-main-service',
            port: 6379,
        })
    ],
    controllers: [AppController],
    providers: [
        AppService,
        HttpCacheInterceptor,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
})
export class AppModule {
}
