import validator from 'validator';
export default class Contato{
    constructor(formClass){
        this.form = document.querySelector(formClass);

    }
    init(){
        this.events();
    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit',e => {
            e.preventDefault();
            this.validate(e);
        })   
    }
    validate(e){
        const el = e.target;

        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        const nomeInput = el.querySelector('input[name="nome"]');

        let error = false;
        if(!validator.isEmail(emailInput.value)){
            error = true
            alert('email inválido')
        }
        if(!validator.isMobilePhone(telefoneInput.value,['pt-BR'])){
            error = true
            alert('telefone inválido')
        }
        if(nomeInput.value.trim() === '') {
            error = true
            alert('nome inválido')
        }
        if(!error) el.submit()

    }
}