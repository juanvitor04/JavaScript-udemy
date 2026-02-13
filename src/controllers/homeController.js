import { HomeModel } from "../models/HomeModel.js";

HomeModel.create({
    titulo:'Outra Descrição',
    descricao:'Outra Descrição'
})
.then(dados => console.log(dados))
.catch( e => console.log(e))

const homeController = {
    paginaInicial(req,res){
    res.render('index',{
        titulo:'Este será o titulo da página',
        numeros:[0,1,2,3,4,5,6,7,8,9]
    });
    return
},

    trataPost(req,res){
    res.send(req.body)
    return
},

}

export default homeController
