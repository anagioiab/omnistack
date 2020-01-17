const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://anagioiab:gioia1997@cluster0-kvoov.mongodb.net/week10?retryWrites=true&w=majority' , 
{ useNewUrlParser: true,
useUnifiedTopology: true,
 });

app.use(express.json());
app.use(routes);

//Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:

//Query Params: request.query (filtros, ordenação, paginação...)
//Route Params: request.params (identificar recurso na alteração ou remoção)
//Body: request.body (dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)



app.listen(3333);
