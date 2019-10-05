FROM php:7.3-fpm-alpine

RUN apk add --update \
    curl \
    wget \
    bash \
    #add symfony required dependendencies
    php7-ctype \
    php7-iconv \
    php7-json \
    pcre \
    php7-session \
    php7-simplexml \
    php7-tokenizer \
    #add postgres driver
    postgresql-dev \
    libpq \
    #add postgres driver's dependencies
    php7-pdo \
    php7-pdo_pgsql \
    php7-pgsql \
    php7-mcrypt \
    && rm -rf /var/cache/apk/* \
    #install composer
    && curl -sS https://getcomposer.org/installer | php \
    #make composer global command
    && mv composer.phar /usr/local/bin/composer \
    #install symfony cli
    && wget https://get.symfony.com/cli/installer -O - | bash \
    #make symfony global
    &&  mv /root/.symfony/bin/symfony /usr/local/bin/symfony \
    &&  composer require --dev symfony/phpunit-bridge \
    #need for using symfony maker
    &&  composer require symfony/maker-bundle --dev \
    &&  composer require doctrine/annotations \
    &&  composer require symfony/orm-pack

#adding php extension
RUN docker-php-ext-install  pdo \
                            pdo_pgsql \
                            pgsql \

