import {CacheInterceptor, CacheModule, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {APP_INTERCEPTOR} from "@nestjs/core";
import * as redisStore from 'cache-manager-redis-store';
import {HttpCacheInterceptor} from "./interceptors/http-cache.interceptor";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {UserService} from "./services/user.service";

@Module({
    imports: [
        CacheModule.register({
            store: redisStore,
            host: 'redis-main-service',
            port: 6379,
        }),
        ClientsModule.register([
            {
                name: 'AUTH_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://auth-api:UMHXuMhbQypZwPVh@rabbit_mq-common-service:5672'],
                    queue: 'auth_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [
        AppService,
        HttpCacheInterceptor,
        UserService,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
})
export class AppModule {
}
