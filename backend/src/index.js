const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 * 
 */


 /**
  * Driver: SELECT * FROM users
  * Query builder: table('users').select('*').where()
  * utilizaremos o query builder Knex (O mais utilizado no node funciona para todos os bancos)
  */

app.listen(3333);