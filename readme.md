### Install docker for vagrant
`sudo apt-get install docker-ce=18.06.1~ce~3-0~ubuntu`

### Init front
`docker-compose exec nodejs-frontend ng new video-stream --directory ./ --skip-install`

### Install npm modules for front
`docker-compose run  nodejs-frontend npm i --no-bin-links`

### Run front
`docker-compose run nodejs-frontend`

### Run pre requires after symfony install
`docker-compose run php-backend-auth-api symfony check:requirements`

### init symfony app skeleteon
`symfony new video-stream-api --no-git`

### connect to docker ps
`docker exec -i -t 6dfe83c14d53 bash`

### add amqp lib
`docker-compose run php-backend-auth-api composer require php-amqplib/rab
bitmq-bundle`


### run consumer
`docker-compose run php-backend-auth-api php bin/console rabbitmq:consumer user_auth -vvv`


### start rpc server
`docker-compose run php-backend-auth-api php bin/console rabbitmq:rpc-server user_auth`
