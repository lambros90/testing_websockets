.PHONY: install

install:
	apt-get update
	apt-get upgrade
	apt install python3-pip -y
	pip3 install pingparsing
	pip3 install Flask

runserver:
	node index.js

runclient:
	node client.js

all:
	apt-get update
	apt-get upgrade -y
	apt install nodejs -y
	apt-install npm -y
