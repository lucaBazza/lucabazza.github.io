# use smallest image: 740Kb  (note that could not have AMD64 support)
FROM busybox:1.38.0-uclibc

# Create a non-root user to own the files and run our server
RUN adduser -D static
USER static
WORKDIR /home/static

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
COPY . .

# let traefik to auto-discover the port
EXPOSE 80

# Run BusyBox httpd
CMD ["busybox", "httpd", "-f", "-v", "-p", "80"]

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget --spider --quiet http://localhost/ || exit 1
