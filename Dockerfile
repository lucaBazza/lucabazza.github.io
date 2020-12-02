#FROM php:apache
#COPY . /var/www/html
#COPY .vhost.conf /etc/apache2/sites-available/000-default.conf

FROM httpd:2.4
COPY . /usr/local/apache2/htdocs/