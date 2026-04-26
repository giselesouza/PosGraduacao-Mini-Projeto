# 🚀 Task API - Gerenciamento de Tarefas

## 📌 Descrição

API RESTful desenvolvida com Node.js, Express e PostgreSQL para gerenciamento de tarefas.
Permite criar, listar, atualizar e deletar tarefas, além de aplicar filtros e paginação.

---

## 🧱 Tecnologias

* Node.js
* Express
* Sequelize
* PostgreSQL
* Jest

---

## ⚙️ Como rodar o projeto

```bash
git clone https://github.com/giselesouza/PosGraduacao-Mini-Projeto
cd PosGraduacao-Mini-Projeto
npm install
```

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
DB_HOST=localhost
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=5432
```

---

## ▶️ Rodar aplicação

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 🧪 Rodar testes

```bash
npm test
```

---

# 🔄 Endpoints da API

## 📌 Criar tarefa

**POST /tasks**

```json
{
  "title": "Estudar Node.js",
  "description": "Aprender Express e Sequelize",
  "status": "todo",
  "deadline": "2026-05-01"
}
```

### ✔ Resposta

```json
{
  "id": 1,
  "title": "Estudar Node.js",
  "status": "todo"
}
```

---

## 📌 Listar todas as tarefas

**GET /tasks**

### ✔ Query params (opcional)

* `status=todo | in_progress | done`
* `search=palavra`
* `limit=10`
* `offset=0`

### ✔ Exemplo

```
GET /tasks?status=todo&limit=5
```

---

## 📌 Buscar tarefa por ID

**GET /tasks/:id**

### ✔ Exemplo

```
GET /tasks/1
```

---

## 📌 Atualizar tarefa

**PUT /tasks/:id**

```json
{
  "title": "Estudar Node.js avançado",
  "status": "in_progress"
}
```

---

## 📌 Deletar tarefa

**DELETE /tasks/:id**

```
DELETE /tasks/1
```

---

## 📌 Listar tarefas atrasadas

**GET /tasks/overdue**

Retorna tarefas com prazo vencido.

---

# 📦 Funcionalidades

✔ CRUD completo
✔ Filtro por status
✔ Busca por palavra-chave
✔ Paginação
✔ Identificação de tarefas atrasadas

---

# 🧪 Testes

Testes automatizados utilizando Jest para validação de regras de negócio e endpoints.

---

# 📁 Estrutura do projeto

```
/src
  /controllers
  /models
  /routes
  /services
  /middlewares
  /config
/tests
```

---

# 📄 Licença

Este projeto está sob a licença MIT.
