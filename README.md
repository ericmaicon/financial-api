#

## Install

```sh
yarn install
```

## Running locally

```sh
docker-compose up -d
sls offline start
```

## Migrations

create a migration

```sh
typeorm migration:create -n Stock
```

run migrations

```sh
npm run migration:run
```

## Links

[https://serverless.com/blog/serverless-express-rest-api/](https://serverless.com/blog/serverless-express-rest-api/)

[https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/](https://blog.shovonhasan.com/deploying-a-typescript-node-aws-lambda-function-with-serverless/)

[https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/](https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/)
