# Basic build stuff (Custom since node is annoying af)
FROM ubuntu:bionic as base

# Install required packages
RUN apt-get update && apt-get install -y -qq apt-utils curl webp
RUN cd ~ && \
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    apt-get install -y -qq nodejs

# Setup basic fs & user stuff
WORKDIR /usr/var/app
RUN useradd -ms /bin/bash owo
RUN chown -R owo:owo .
USER owo

# node stuff
FROM base as node
COPY package*.json gridsome*.js ./
RUN npm ci

FROM node as testing
CMD ["npm", "run", "test:npm"]

# Run as development server
FROM node as development
CMD ["npm", "run", "start:npm"]


# Build and only get the built files
FROM node as build
COPY ./static ./static
COPY ./src ./src
USER root
RUN npm run build:npm
RUN rm -rf ./src/.temp


# For exporting from docker
FROM scratch as export
COPY --from=build /usr/var/app/dist ./


# For serving production files from container
FROM nginx:1.18 as deploy

# Get build arguments & environment variables
ENV SERVER_NAME "_"
ENV ROOT /var/www
ENV uri \$uri

# Let's build this thing (https://manifold.co/blog/building-a-production-grade-container-for-your-static-javascript-application-b2b2eff83fbd)
COPY --from=build /usr/var/app/dist ${ROOT}
COPY ./template.conf ./
CMD ["sh", "-c", "envsubst < ./template.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
