# Encurtador de Links

Aplicação web desenvolvida com **Node.js, Express, Pug, Sass e Bootstrap** para encurtar URLs utilizando a API do TinyURL.

## Preview

![Preview da aplicação](docs/preview.png)

## Demonstração

- Digite uma URL
- Encurte o link
- Copie o link encurtado com um clique
- Exiba links ordenados por número de acessos

## Tecnologias

- Node.js
- Express
- Pug
- Sass
- Bootstrap 5
- Bootstrap Icons
- Axios
- Dotenv
- Nodemon
- TinyURL API

## Funcionalidades

- Encurtamento de URLs
- Validação de formulário
- Copiar link para a área de transferência
- Alertas dinâmicos
- Leitura de dados de arquivo JSON
- Ordenação por número de acessos
- Estrutura modular de JavaScript e Sass

## Instalação

Clone o repositório
```bash
  https://github.com/giosantos99/encurtador-de-links.git
```

Instale as dependências:
npm install

## Configuração das variáveis de ambiente

Crie um arquivo .env na raiz do projeto, utilizando o .env.example como referência.

```bash
  cp .env.example .env
```

Configure as variáveis no arquivo .env:

TINYURL_API_TOKEN=seu_token_aqui

Para utilizar a API do TinyURL, é necessário criar uma conta e gerar um API Token na plataforma oficial.

**Importante**: mantenha seu arquivo .env privado e nunca compartilhe seu token publicamente.

## Executando em desenvolvimento

```bash
  npm run dev
```

A aplicação ficará disponível em: http://localhost:3000

## Gerando CSS para produção

```bash
  npm run build:css
```

## Executando em produção

```bash
  npm start
```

## Scripts

- npm run dev — inicia servidor com Nodemon e Sass em modo watch
- npm run watch:server — reinicia o servidor automaticamente
- npm run watch:scss — recompila o Sass automaticamente
- npm run build:css — gera CSS minificado
- npm start — inicia a aplicação em modo produção

## Autora

Giovanna Santos de Souza