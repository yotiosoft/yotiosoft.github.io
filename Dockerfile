FROM --platform=linux/amd64 debian:10.2

RUN apt-get update && apt-get -y upgrade
RUN apt-get -y install build-essential gcc-multilib qemu-system-x86 

RUN mkdir -p /src/xv6_vdom
WORKDIR /src/xv6_vdom
COPY . .
