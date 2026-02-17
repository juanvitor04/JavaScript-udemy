import express from 'express';
import homeController from './src/controllers/homeController.js';
import loginController from './src/controllers/loginController.js';

const route = express.Router()

//Rotas da Home
route.get('/',homeController.index);
 //Rotas de login
route.get('/login/index',loginController.index);
route.post('/login/register',loginController.register)

export {route}