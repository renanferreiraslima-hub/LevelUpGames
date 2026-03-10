# 🎮 LevelUp Games API

![NestJS](https://img.shields.io/badge/NestJS-Framework-red)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)
![TypeORM](https://img.shields.io/badge/TypeORM-ORM-green)

API REST desenvolvida utilizando **NestJS**, **TypeORM** e **MySQL** para gerenciamento de **produtos** e **categorias**.

O projeto implementa um **CRUD completo** para ambas as entidades e estabelece um relacionamento **One-to-Many** entre elas.

Projeto desenvolvido como parte do **Bootcamp de Desenvolvimento Web da Generation Brasil**.

---

# 📚 Tecnologias Utilizadas

- NestJS
- TypeScript
- Node.js
- TypeORM
- MySQL
- REST API

---

# 🧠 Arquitetura do Projeto

O projeto segue a arquitetura padrão recomendada pelo NestJS, baseada em separação de responsabilidades:

- Controller → Responsável pelas rotas da API  
- Service → Responsável pela lógica de negócio  
- Module → Organização das funcionalidades  
- Entity → Representação das tabelas no banco de dados  

Estrutura do projeto:

src  
 ├─ categoria  
 │   ├─ categoria.controller.ts  
 │   ├─ categoria.service.ts  
 │   ├─ categoria.module.ts  
 │   └─ entities  
 │       └─ categoria.entity.ts  
 │  
 ├─ produto  
 │   ├─ produto.controller.ts  
 │   ├─ produto.service.ts  
 │   ├─ produto.module.ts  
 │   └─ entities  
 │       └─ produto.entity.ts  
 │  
 ├─ app.module.ts  
 └─ main.ts  

---

# 🔗 Relacionamento entre Entidades

O sistema implementa o relacionamento:

Categoria (1) -------- (N) Produto

- Uma categoria pode possuir vários produtos  
- Um produto pertence a apenas uma categoria  

Exemplo:

Categoria: Consoles  

Produtos:
- Playstation 5  
- Xbox Series X  

---

# 🚀 Funcionalidades da API

## Categorias

GET /categorias  
GET /categorias/:id  
POST /categorias  
PUT /categorias/:id  
DELETE /categorias/:id  

---

## Produtos

GET /produtos  
GET /produtos/:id  
POST /produtos  
PUT /produtos/:id  
DELETE /produtos/:id  

---

# 📦 Exemplo de Requisição

Criar Categoria

POST /categorias

{
  "nome": "Consoles"
}

---

Criar Produto

POST /produtos

{
  "nome": "Playstation 5",
  "preco": 4500,
  "categoria": {
    "id": 1
  }
}

---

# ⚙️ Como Executar o Projeto

1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/levelup-games.git

2️⃣ Entrar na pasta do projeto

cd levelup-games

3️⃣ Instalar dependências

npm install

4️⃣ Configurar banco de dados

No arquivo **app.module.ts** configure:

type: 'mysql'  
host: 'localhost'  
port: 3306  
username: 'root'  
password: 'root'  
database: 'db_levelup_games'  

5️⃣ Executar aplicação

npm run start:dev

A API estará disponível em:

http://localhost:3000

---

# 🧪 Testando a API

Você pode testar os endpoints utilizando ferramentas como:

- Insomnia
- Postman
- Thunder Client

---

# 👨‍💻 Autor

Desenvolvido por **Renan Lima**

LinkedIn  
https://www.linkedin.com/in/renanferreiralima
