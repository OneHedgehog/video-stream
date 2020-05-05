import {Inject, Injectable} from "@nestjs/common";
import {Client, ClientProxy, ClientProxyFactory, Transport} from "@nestjs/microservices";
import {interval, of} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Injectable()
export class UserService {
    constructor(
        @Inject('AUTH_SERVICE') private amqpClient: ClientProxy,
    ) {
    }


    public authenticate(user) {
        return this.amqpClient.send<any, any>('[auth_service]_authenticate', user).pipe(
            //takeUntil(interval(2000))
        );
    }
}