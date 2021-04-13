# Basic build stuff (Custom since node is annoying af)
FROM ubuntu:bionic as base

# Install required packages
RUN apt-get update
RUN apt-get install -y -q apt-utils curl webp
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh

RUN apt-get install -y -q nodejs

# Setup project
WORKDIR /var/usr/app
COPY . ./
RUN npm ci --production

# Load arguments
ARG CONTENTFUL_SPACE
ARG CONTENTFUL_TOKEN
ARG GOOGLE_ANALYTICS

# Create bundle
RUN npm run build
RUN ls


# Export and serve bundle
FROM nginx:1.19
ENV ROOT /var/www
WORKDIR ${ROOT}

COPY --from=base /var/usr/app/dist ./
ENV uri \$uri

# Setup runtime variables
ENV ROOT /var/www
ENV SERVER_NAME "_"

# Run nginx
COPY ./template.conf ./
CMD ["sh", "-c", "envsubst < ./template.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"];
