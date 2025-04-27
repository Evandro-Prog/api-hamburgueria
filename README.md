<div align="center">
  <h1>🍔 API Hamburgueria</h1>
  <p>API RESTful para gestão de pedidos, produtos e usuários com autenticação JWT.</p>
</div>

---

<div align="center">

### 🚀 Tecnologias Utilizadas

</div>

- **Node.js**
- **Express**
- **Sequelize & PostgreSQL**
- **Mongoose & MongoDB**
- **JWT**
- **Bcrypt**
- **Yup**
- **UUID**
- **Multer**
- **ESLint / Prettier**
- **Nodemon**

---

<div align="center">

### 📦 Instalação

</div>

```bash
git clone https://github.com/Evandro-Prog/api-hamburgueria.git
cd api-hamburgueria
yarn install
```

Configure o arquivo `.env`:

```
DATABASE_URL=<URL do PostgreSQL>
MONGO_URL=<URL do MongoDB>
JWT_SECRET=<sua-chave-secreta>
```

Rode as migrações:

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

Inicie o servidor:

```bash
yarn dev
```

---

<div align="center">

### 🔐 Autenticação

</div>

A API exige autenticação JWT. Após login, inclua o token no header das requisições:

```
Authorization: Bearer <seu_token>
```

---

<div align="center">

### 📌 Endpoints Principais

</div>

#### 🔑 Autenticação

| Método | Rota     | Descrição        |
|--------|----------|------------------|
| POST   | /login   | Login de usuário |

#### 👤 Usuários

| Método | Rota         | Descrição               |
|--------|--------------|--------------------------|
| POST   | /usuarios    | Cadastro de usuário      |
| GET    | /usuarios/me | Ver perfil autenticado   |

#### 🍔 Produtos

| Método | Rota          | Descrição                |
|--------|---------------|---------------------------|
| GET    | /produtos     | Lista produtos            |
| POST   | /produtos     | Cria novo produto         |
| PUT    | /produtos/:id | Atualiza produto          |
| DELETE | /produtos/:id | Remove produto            |

#### 🛒 Pedidos

| Método | Rota      | Descrição           |
|--------|-----------|----------------------|
| POST   | /pedidos  | Cria novo pedido     |
| GET    | /pedidos  | Lista pedidos do usuário |

---

<div align="center">

### 📥 Exemplos de Requisições

</div>

#### 🔑 Login

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

**Resposta:**

```json
{
  "usuario": {
    "id": 1,
    "nome": "João",
    "email": "usuario@email.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

#### 👤 Criar Usuário

```json
{
  "nome": "João",
  "email": "usuario@email.com",
  "senha": "123456"
}
```

**Resposta:**

```json
{
  "id": 1,
  "nome": "João",
  "email": "usuario@email.com"
}
```

#### 🍔 Criar Produto

Headers:

```
Authorization: Bearer <seu_token>
Content-Type: multipart/form-data
```

Form Data:

```
nome: X-Burger
descricao: Pão, carne, queijo e alface
preco: 25.90
imagem: (arquivo .jpg ou .png)
```

**Resposta:**

```json
{
  "id": "uuid-produto",
  "nome": "X-Burger",
  "descricao": "Pão, carne, queijo e alface",
  "preco": 25.9,
  "imagem": "/uploads/xburger.jpg"
}
```

#### 🛒 Criar Pedido

```json
{
  "produtos": [
    { "id": "uuid-do-produto", "quantidade": 2 },
    { "id": "uuid-outro-produto", "quantidade": 1 }
  ],
  "observacoes": "Sem cebola no segundo lanche"
}
```

**Resposta:**

```json
{
  "id": "pedido123",
  "status": "recebido",
  "total": 78.70
}
```

---

<div align="center">

### 📄 Licença

</div>

Este projeto está licenciado sob a [MIT License](LICENSE).

---

<div align="center">
  Feito com 💚 por Evandro-Prog
</div>
