FROM nginx:1.25.3-alpine3.18-perl

COPY . /usr/share/nginx/html

# remove unwanted
RUN rm /usr/share/nginx/html/nginx.conf

# copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80


##       OLDER VERSION

# FROM httpd:latest
# COPY . /usr/local/apache2/htdocs/

# docker run -d --name lucabazza.github.io -v $(PWD)/:/usr/local/apache2/htdocs/ -p 80:80 -d httpd
# docker build -t registry.zabba.dev/lucabazza.github.io:latest .
# docker push registry.zabba.dev/lucabazza.github.io:latest
