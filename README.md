## Description

- [Structure](#structure)
- [Prerequisites](#prerequisites)
- [Running the app](#running-the-app)
- [Commit](#commit)
- [Nest cli](#nest-cli)
- [Docker image](#docker-image)
- [Benchmark test](#benchmark-test)

## Structure

- `src/` - main folder, where project code source is present
  - `main.ts` - app bootstrap file
  - `app.module.ts` - main module, where other modules are registered
  - `articles/` - Project module folder
    - `article.entity.ts`
    - `article.controller.ts`
    - `article.module.ts`
    - `article.service.ts`
    - `dto` - folder with requests' DTO

## Prerequisites

```bash
$ yarn install
$ yarn prepare
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test:cov
```

## Commit

[Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) is checked by husky.

## Nest cli

```bash
$ nest g --help
$ nest module posts
$ nest g controller posts
```

## Docker image

```bash
$ docker build -t nest .
$ docker run --name nest -p 3000:3000 -d nest
```

## Benchmark test

[Apache benchmark for docker](https://hub.docker.com/r/jordi/ab)
Result of 10000 requests is [benchmark.txt](https://github.com/kozulova/nest-backend/blob/main/benchmark.txt)

```bash
$ docker pull jordi/ab
$ docker build -t nest-backend .
$ docker run --name nest-backend -p 3000:3000 -d nest-backend
$ docker run --rm jordi/ab -k -c 100 -n 10000 http://172.17.0.1:3000/articles/ > benchmark.txt
```
