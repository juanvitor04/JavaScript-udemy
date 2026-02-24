# Agenda — Node.js

Aplicação para gerenciar contatos construída com Node.js, Express, EJS, Bootstrap e MongoDB.

## Funcionalidades

- Cadastro e login de usuário com sessões armazenadas no MongoDB
- CRUD de contatos (criar, editar, listar e excluir)
- Validações no servidor (models) e no cliente (`validator`)
- Proteções básicas com CSRF e sessões autenticadas

## Tecnologias

- **Back-end:** Node.js, Express, Mongoose
- **Front-end:** EJS, Bootstrap, Webpack
- **Banco de dados:** MongoDB
- **Outros:** express-session, connect-mongo, csurf, dotenv

## Pré-requisitos

- Node.js >= 14
- npm
- MongoDB em execução localmente ou na nuvem

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/agenda.git
cd agenda
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto:

```env
CONNECTIONSTRING=mongodb://localhost:27017/agenda
```

## Executando o projeto

Em um terminal, gere o bundle do frontend (modo watch):

```bash
npm run dev
```

Em outro terminal, inicie o servidor:

```bash
npm start
```

Acesse em: [http://localhost:3000](http://localhost:3000)

## Estrutura do projeto

```
├── server.js                  # Ponto de entrada do servidor
├── routes.js                  # Rotas da aplicação
├── frontend/                  # Código cliente (Webpack entry)
│   └── modules/               # Módulos JS (Login, Contato)
├── public/                    # Arquivos estáticos (bundle gerado)
├── src/
│   ├── controllers/           # Controladores (home, login, contato)
│   ├── models/                # Models (LoginModel, ContatoModel)
│   ├── middleware/            # Middlewares globais e CSRF
│   └── views/                 # Views EJS
└── .env                       # Variáveis de ambiente (não versionado)
```

## Licença

Este projeto está sob a licença MIT.