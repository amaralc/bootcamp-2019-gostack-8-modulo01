const express = require('express');

const server = express();

// Query params = ?teste=1
// Ex: > const nome = req.query.nome;

// Route params = /users/1
// Ex: > const id = req.params.id;

// Request body = {"name": "Calil", "email": "calil@email"}


//localhost:3000/teste

server.get('/user/:id', (req, res) => {
  const id = req.params.id;
  return res.json({ message: `Buscando o usuário ${id}` });
});

server.listen(3000);