import {Contato} from '../models/contatoModel.js'

const homeController = {
    async index(req,res){
        const contatos = await Contato.buscaContatos()
    res.render('index',{contatos})
},

}

export default homeController
