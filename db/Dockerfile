FROM mysql:5.7

ENV MYSQL_DATABASE=Shmetsy \
    MYSQL_ROOT_PASSWORD=pass \
    MYSQL_ROOT_HOST=%

COPY ./schema.sql /docker-entrypoint-initdb.d/
