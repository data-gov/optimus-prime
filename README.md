# optmus-prime
[![Build Status](https://travis-ci.org/data-gov/optimus-prime.svg?branch=master)](https://travis-ci.org/data-gov/optimus-prime)

## Rodando optmus-prime localmente

- git clone git@github.com:data-gov/optimus-prime.git
- cd optimus-prime
- yarn install ou npm install
- npm run dev

Voce precisará criar um arquivo `.env` após clonar o repositório, na pasta raiz do projeto e adicionar
```
MONGO_URL='mongodb://USUARIO:SENHA@CAMINHO_DO_BANCO'
ENGINE_API_KEY='service:data-gov-optimus-prime:KEY'
```
Procure um dos mantenedores do projeto para conseguir acesso ao banco de dados

## Como adicionar uma query ao graphql

https://github.com/data-gov/optimus-prime/wiki/Como-adicionar-uma-query

## Performance Metrics

https://engine.apollographql.com/service/data-gov-optimus-prime
