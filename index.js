const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Ex: > const nome = req.query.nome;

// Route params = /users/1
// Ex: > const id = req.params.id;

// Request body = {"name": "Calil", "email": "calil@email"}

// CRUD - Create, Read, Update, Delete


const users = ['Diego', 'Cláudio', 'Victor'];


server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd('Request');

})


// retorna usuários

server.get('/users', (req, res) => {
  return res.json(users);
})

//retorna um usuário

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
})

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
})

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
})

server.listen(3000);