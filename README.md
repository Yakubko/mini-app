# Mini APP

Example for mini app using

![Docker](.github/docker.svg)
![TypeScript](.github/typescript.svg)
![Express](.github/expressjs.svg)
![PostgreSQL](.github/postgresql.svg)
![React](.github/reactjs.svg)
![Redux](.github/redux.svg)
![Bootstrap](.github/bootstrap.svg)

## Running

Install [Docker](https://www.docker.com/get-started) on your machine and run the following command from the root directory of this project

`docker-compose up -d`

Then open in your browser: [http://localhost:3000/](http://localhost:3000/)

### Known issue

You might have a problem with flyway and with database migration. Rerun this container until he end with message:

```
miniapp_flyway exited with code 0
```

## Functionality

You can create a new account on page: [http://localhost:3000/signUp](http://localhost:3000/signUp)

Sign in on page: [http://localhost:3000/signIn](http://localhost:3000/signIn)

Signed in user can delete other created users on page: [http://localhost:3000/usersList](http://localhost:3000/usersList)
