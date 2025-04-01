const express = require("express");

const server = express();

server.use(express.json());

const cursos = ['NodeJS', 'React', 'React Native'];

server.use((req, res, next) => {
    console.log(`URL chamada: ${req.url}`);
    return next();
});

function checkCurso(req, res, next) {
    if(!req.body.name) {
        return res.status(400).json({error: 'Nome do curso é obrigatório!' });
    }

    return next();
};

server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

server.get('/cursos/:index', (req, res) => {
  const {index} = req.params;
  res.json(cursos[index]);
});

server.post('/cursos', (req, res) => {
    const {name} = req.body;  
    cursos.push(name);

    return res.json(cursos);
});

server.put('/cursos/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params;

    cursos.splice(index, 1);

    return res.json({message: 'Curso deletado com sucehsso!'});
})

server.listen(3000);
