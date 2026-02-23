import dotenv from 'dotenv'
import express from 'express';
import {route as routes} from './routes.js';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import {checkCsrfError, csrfMiddleware, middlewareGlobal } from './src/middleware/middleware.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import flash from 'connect-flash'
import csrf from 'csurf';

// Conexão com o banco de dados 
dotenv.config()
mongoose.set('strictQuery',true)
mongoose.connect(process.env.CONNECTIONSTRING,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useUnifiedTopology:true,})
.then(() => {
    console.log('conectado')
    app.emit('conectado')
})
.catch((e) => console.log('Não Conectado'))

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname,'public')))
const sessionOptions = session({
  secret: 'dfjklaeshfahgajkwbgjarwgbjaw()',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true
  }
})

app.set('views',path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')
app.use(express.json())
app.use(sessionOptions)
app.use(flash());
app.use(csrf())
app.use(middlewareGlobal)
app.use(csrfMiddleware)
app.use(checkCsrfError)
app.use(routes)

//Só abre a porta caso ele conecte com a base de dados
app.on('conectado',() =>{
    app.listen(3000,() => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
})

