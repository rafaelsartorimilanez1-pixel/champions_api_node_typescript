# API Champions ⚽

API REST desenvolvida com Node.js, TypeScript e Express para gerenciamento de jogadores e clubes de futebol.
Link do deploy: https://champions-api-node-typescript.onrender.com

## Tecnologias Utilizadas

* Node.js
* TypeScript
* Express.js
* CORS

## Funcionalidades

### Jogadores

* Listar todos os jogadores
* Buscar jogador por ID
* Cadastrar jogador
* Atualizar jogador
* Remover jogador

### Clubes

* Listar todos os clubes
* Buscar clube por ID
* Cadastrar clube
* Remover clube

## Estrutura do Projeto

```text
src/
├── controller/
├── data/
├── models/
├── repositories/
├── services/
├── utils/
├── app.ts
├── routes.ts
└── server.ts
```

A aplicação segue uma arquitetura em camadas para facilitar a manutenção e organização do código.

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Modo desenvolvimento:

```bash
npm run start:dev
```

Modo observação (watch):

```bash
npm run start:watch
```

Gerar build:

```bash
npm run build
```

Executar versão de produção:

```bash
npm start
```

## Endpoints

### Players

| Método | Rota         |
| ------ | ------------ |
| GET    | /players     |
| GET    | /players/:id |
| POST   | /players     |
| PATCH  | /players/:id |
| DELETE | /players/:id |

### Clubs

| Método | Rota       |
| ------ | ---------- |
| GET    | /clubs     |
| GET    | /clubs/:id |
| POST   | /clubs     |
| DELETE | /clubs/:id |

## Deploy

A API está publicada utilizando a plataforma Render.

## Objetivo

Este projeto foi desenvolvido para praticar conceitos de desenvolvimento Backend com Node.js, TypeScript, Express e arquitetura em camadas, implementando operações CRUD e boas práticas de organização de código.
