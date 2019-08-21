const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name": "Calil", "email": "calil@email"}


//localhost:3000/teste

server.get('/teste', (req, res) => {
  const nome = req.query.nome;
  const email = req.query.email;
  return res.json({ message: `Hello ${nome}, seu e- mail é ${email}` });
});

server.listen(3000);