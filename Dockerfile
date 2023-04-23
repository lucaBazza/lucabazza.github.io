FROM httpd:latest
COPY . /usr/local/apache2/htdocs/

# docker run -d --name lucabazza.github.io -v $(PWD)/:/usr/local/apache2/htdocs/ -p 80:80 -d httpd

# docker build -t registry.zabba.dev/lucabazza.github.io:latest .

# docker push registry.zabba.dev/lucabazza.github.io:latest