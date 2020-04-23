import {CacheInterceptor, ExecutionContext, Injectable} from "@nestjs/common";

@Injectable()
export class HttpCacheInterceptor extends CacheInterceptor {
    trackBy(context: ExecutionContext): string | undefined {
        console.log(context);
        return 'key';
    }
}