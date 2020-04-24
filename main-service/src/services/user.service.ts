import {Inject, Injectable} from "@nestjs/common";
import {Client, ClientProxy, ClientProxyFactory, Transport} from "@nestjs/microservices";
import {of} from "rxjs";

@Injectable()
export class UserService {
    constructor(
        @Inject('AUTH_SERVICE') private amqpClient: ClientProxy,
    ) {
    }


    public authenticate(user) {
        return this.amqpClient.send<any, any>('[auth_service]_authenticate', user);
    }
}