import { Login } from '../models/LoginModel.js'
const loginController = {
    index(req,res){
        if(req.session.user) return res.render('login-logado')
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
          req.flash('success','seu usuário foi criado com sucesso')
            req.session.save(() =>{
                return res.redirect('back')
            })
    } catch(e){
            console.log(e)
            return res.render('404')
        }
    },
    async login(req,res){
        try{
        const login = new Login(req.body)
        await login.login()
        if(login.errors.length > 0 ){
            req.flash('errors',login.errors)
            req.session.save(() =>{
                return res.redirect('back')
            })
            return
        }
      
          req.flash('success','Você entrou no sistema')
          req.session.user = login.user;
            req.session.save(() =>{
                return res.redirect('back')
            })
    } catch(e){
            console.log(e)
            return res.render('404')
        }
    },
    logout(req,res){
        req.session.destroy()
        res.redirect('/')
    }

}
export default loginController