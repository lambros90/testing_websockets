.PHONY: install

install:
	apt-get update
	apt-get upgrade -y
	apt install nodejs -y
	apt-install npm -y

runserver:
	node index.js

runclient:
	node client.js

all:
	apt-get update
	apt-get upgrade -y
	apt install nodejs -y
	apt-install npm -y
