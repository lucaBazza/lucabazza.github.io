# use smallest image: 740Kb  (note that could not have AMD64 support)
FROM busybox:1.36.1-uclibc

# Create a non-root user to own the files and run our server
RUN adduser -D static
USER static
WORKDIR /home/static

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
COPY . .

# Run BusyBox httpd
CMD ["busybox", "httpd", "-f", "-v", "-p", "80"]



#FROM nginx:1.25.3-alpine3.18-perl

#COPY . /usr/share/nginx/html

# remove unwanted
#RUN rm /usr/share/nginx/html/nginx.conf

# copy nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf

#EXPOSE 80


##       OLDER VERSION

# FROM httpd:latest
# COPY . /usr/local/apache2/htdocs/

# docker run -d --name lucabazza.github.io -v $(PWD)/:/usr/local/apache2/htdocs/ -p 80:80 -d httpd
# docker build -t registry.zabba.dev/lucabazza.github.io:latest .
# docker push registry.zabba.dev/lucabazza.github.io:latest
