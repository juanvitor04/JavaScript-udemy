import { Login } from "../models/LoginModel.js"
const loginController = {
    index(req,res){
        res.render('login')
    },
    async register(req,res){
        try{
        const login = new Login(req.body)
        await login.register()
        if(login.errors.length > 0 ){
            req.flash('errors',login.errors)
            req.session.save(() =>{
                return res.redirect('back')
            })
            return
        }
          req.flash('success',"seu usuário foi criado com sucesso")
            req.session.save(() =>{
                return res.redirect('back')
            })
    } catch(e){
            conosole.log(e)
            res.render('404')
            return res.render('404')
        }
    }

}
export default loginController