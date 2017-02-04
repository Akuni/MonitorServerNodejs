#!/bin/sh

cd ~/Documents/site/

npm start > logs_npm.txt &

lt --port 8080 --subdomain minerasp  > logs_lt.txt &
