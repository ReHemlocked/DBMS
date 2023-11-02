# DBMS

## set up dev env

`git clone https://github.com/ReHemlocked/DBMS`

### backend

for the first time to build the images

`docker-compose up -d --build`

every time after that 

`docker-compose up -d`

make sure to shut down containers each time, closing terminal doesnt shut them down, so run

`docker-compose down`

### frontend

for the first time 

`docker-compose up -d --build`

### frontend

`cd frontend`

`yarn install`

`yarn start`
