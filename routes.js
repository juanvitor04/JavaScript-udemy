import express from 'express';
import homeController from './src/controllers/homeController.js';
import contatoControllers from './src/controllers/contatoController.js'

const route = express.Router()

//Rotas da Home
route.get('/',homeController.paginaInicial)
route.post('/',homeController.trataPost)

//Rotas de Contatos
route.get('/contato',contatoControllers.paginaInicial)

export {route}