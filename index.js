const express = require('express');

const server = express();

// Query params = ?teste=1
// Ex: > const nome = req.query.nome;

// Route params = /users/1
// Ex: > const id = req.params.id;

// Request body = {"name": "Calil", "email": "calil@email"}


const users = ['Diego', 'Cláudio', 'Victor'];

//localhost:3000/teste

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.listen(3000);