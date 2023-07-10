# TODO API LIST

## Esta é uma API  para gerenciar uma lista de tarefas (todos).

![Screenshot from 2023-07-10 02-50-55](https://github.com/KaioLemos/todo_list/assets/29989786/349700dd-446e-45c1-8b22-a2ea5b514edb)

## Instalação
- Clone o repositório.
- Execute npm install para instalar as dependências.
- Execute npm run server para iniciar o servidor.
- Endpoints
- GET /todos
- Retorna uma lista de todos os todos.

### GET /todos/:id
- Retorna um todo específico com base no ID fornecido.

### PUT /todos/:id
- Atualiza um todo específico com base no ID fornecido. O corpo da solicitação deve incluir um objeto JSON com uma propriedade "message" contendo a nova mensagem do todo.

## Erros
### A API pode retornar os seguintes erros:

- 400 Bad Request: a solicitação está faltando dados necessários.
- 404 Not Found: o todo solicitado não foi encontrado.
- 500 Internal Server Error: ocorreu um erro interno do servidor.
 
## Tecnologias Utilizadas
- Node.js
- Express
- Knex
- SQLite3

## Contribuição
Sinta-se à vontade para contribuir com este projeto! Basta seguir estas etapas:

- Faça um fork do repositório.
- Crie uma nova branch com suas alterações: git checkout -b my-feature-branch
- Faça commit das suas alterações: git commit -am 'Add some feature'
- Envie suas alterações para o seu fork: git push origin my-feature-branch
- Envie um pull request para o repositório original.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

## Contato
Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato comigo através do meu perfil no GitHub.
