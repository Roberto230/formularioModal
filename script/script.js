$(function(){

    //FUNÇÕES DE ABRIR E FECHAR FORMULÁRIO

    oppenWindow();
    clousedWindow();

    function oppenWindow(){
       
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn(); 
        })
    }

    function clousedWindow(){
        var el = $('body,closeForm');

        el.click(function(){
            $('.bg').fadeOut();
        })

        $('form').click(function(e){
            e.stopPropagation();
        })
    }

    //EVENTOS DO FORMULÁRIO

    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this)); 
    })

    $('form#form1').submit(function(e){

        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'));
            return false;
        }else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=telefone]'));
            return false;
        }else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'));
            return false;
        }else{
            alert('Formulário enviado com sucesso!')
        }
        
    })
   
    //FUNÇÕES PARA ESTILIZAR O CAMPO DO FORMULÁRIO
    function aplicarCampoInvalido(el){
        el.css('color','red');
        el.css('border','2px solid red');
        el.val('Campo Inválido');
        //el.data('invalido','true');
    }

    function resetarCampoInvalido(el){
        el.css('color','#ccc');
        el.css('border','1px solid #ccc');
        el.val('');
    }

    //FUNÇÕES PARA VERIFICAR NOSSOS CAMPOS

    function verificarNome(nome){
        //Contando a quandtidade de espaços e os valores.
        if(nome == ''){
            return false;
        }
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

                }else{
                    return false;
                }
            }
        }else{
            return false;
        }
    }

    function verificarTelefone(telefone){
        if(telefone == ''){
            return false;
        }
        if(telefone.match(/^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/) == null){
            return false;
        }
    }

    function verificarEmail(email){
        if(email == ''){
            return false;
        }
        if(email.match(/^([a-z0-9-_]{1,})+@+([a-z.]{1,})$/) == null){
            return false;
        }
    }
    

});