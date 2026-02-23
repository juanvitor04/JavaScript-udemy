import express from 'express';
import homeController from './src/controllers/homeController.js';
import loginController from './src/controllers/loginController.js';
import contatoController from './src/controllers/contatoController.js';
import { loginRequired } from './src/middleware/middleware.js';

const route = express.Router();

//Rotas da Home
route.get('/',homeController.index);
 //Rotas de login
route.get('/login/index',loginController.index);
route.post('/login/register',loginController.register);
route.post('/login/login',loginController.login);
route.get('/login/logout',loginController.logout);

//Rotas de contato
route.get('/contato/index',loginRequired,contatoController.index);
route.post('/contato/register',loginRequired,contatoController.register);
route.get('/contato/index/:id',loginRequired,contatoController.editIndex);
route.post('/contato/edit/:id',loginRequired,contatoController.edit);
route.get('/contato/delete/:id',loginRequired,contatoController.delete);

export {route}