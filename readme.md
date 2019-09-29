sudo apt-get install docker-ce=18.06.1~ce~3-0~ubuntu

docker-compose exec nodejs-frontend ng new video-stream --directory ./ --skip-install

docker-compose run  nodejs-frontend npm i --no-bin-links

#Run front
docker-compose run nodejs-frontend


