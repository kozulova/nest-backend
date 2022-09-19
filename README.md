## Description

- [Structure](#structure)
- [Prerequisites](#prerequisites)
- [Running the app](#running-the-app)
- [Commit](#commit)
- [Nest cli](#nest-cli)

## Structure

- `src/` - main folder, where project code source is present
  - `main.ts`
  - `app.module.ts`
  - `articles/` - Project module folder
    - `article.entity.ts`
    - `article.controller.ts`
    - `article.module.ts`
    - `article.service.ts`

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

# e2e tests
$ yarn run test:e2e

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
