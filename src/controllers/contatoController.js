import { Contato } from "../models/contatoModel.js"
const contatoController = {
    index(req,res){
    res.render('contato', { contato: {} })
},
    async register(req,res){
        try{
            const contato = new Contato(req.body);
        await contato.register();
        if(contato.errors.length > 0){
            req.flash('errors',contato.errors)
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('success','Contato registrado com sucesso.')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`)) 
        return;
        }
        catch(e){
           console.log(e);
           return res.render('404');
        }
    },
    async editIndex(req,res){
        if(!req.params.id) return res.render('404');

        const contato = await Contato.buscarPorId(req.params.id);

        if(!contato) return res.render('404');
        res.render('contato',{ contato });
    },
    async edit(req,res){
        try{
        if(!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id)

         if(contato.errors.length > 0){
            req.flash('errors',contato.errors)
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('success','Contato editado com sucesso.')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`)) 
        return;
        }
        catch(e){
            console.log(e)
            res.render('404')
        }
        
    },
    async delete(req,res){
        if(!req.params.id) return res.render('404');

        const contato = await Contato.delete(req.params.id);

        if(!contato) return res.render('404');

        req.flash('success','Contato apagado com sucesso.')
        req.session.save(() => res.redirect('back'))
        return;
    }
};

export default contatoController
