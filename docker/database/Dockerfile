FROM postgres:9.4
COPY *.sql docker-entrypoint-initdb.d/
COPY *.sh docker-entrypoint-initdb.d/
COPY data/ /csvdata/
RUN ls -la /csvdata/*