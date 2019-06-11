FROM nginx:1.10.0
VOLUME './logs' '/var/log/nginx'
ADD './default.conf' '/etc/nginx/conf.d/default.conf'
WORKDIR '/var/www/frontend'