FROM debian:stable-slim
RUN mkdir /task
RUN apt-get update
RUN apt-get install -y cmake clang python3 libssl-dev curl lld
WORKDIR /var/task

