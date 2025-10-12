# Dockerfile — static site, no build step
FROM ghcr.io/static-web-server/static-web-server:2
# Serve everything under /public at port 3000
COPY src/ /public
EXPOSE 3000
ENV SERVER_PORT=3000
