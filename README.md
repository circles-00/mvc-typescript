# MVC Project using Express.JS, Typescript, TypeORM & EJS
## Starting the project
- First make sure you have Node v21 installed on your machine. You can use Node Version Manager for this(NVM)
- Copy .env.example to .env

Then being at root of the project, run:
```shell
yarn
```
Then just run
```
yarn dev
```

Your server should be available on http://localhost:3000 if you used the default .env.example.

The .env.example contains real credentials of a hosted PostgreSQL database for simplicity.

# ORM
For ORM this project uses TypeORM which offers a fully type-safe environment, meaning that we can the models that we define using TypeORM, as data models as well throughout our code without having to define additional types/models.

