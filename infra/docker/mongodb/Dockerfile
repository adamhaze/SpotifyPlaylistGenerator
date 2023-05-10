FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME=myuser
ENV MONGO_INITDB_ROOT_PASSWORD=mypassword
ENV MONGO_INITDB_DATABASE=spg

# Copy initialization script
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Enable authentication
RUN sed -i "s/#security:/security:\\n  authorization: enabled/" /etc/mongod.conf.orig

# Start mongod service
CMD ["mongod", "--auth", "--dbpath", "/data/db"]
