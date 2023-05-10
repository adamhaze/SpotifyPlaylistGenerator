FROM openjdk:17-jdk-slim-buster

WORKDIR /app
COPY build/libs/* build/libs/ 
COPY .env build/libs/

EXPOSE 8080

WORKDIR /app/build/libs
CMD ["java", "-jar", "spg-0.0.1-SNAPSHOT.jar"]

