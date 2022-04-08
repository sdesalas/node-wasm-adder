FROM debian:stable-slim
RUN mkdir /task
RUN apt-get update
RUN apt-get install -y cmake clang python3
RUN apt-get install -y libssl-dev curl lld
WORKDIR /var/task

